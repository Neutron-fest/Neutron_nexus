import { Client } from '@notionhq/client'
import { isNotionClientError } from '@notionhq/client'
import { NextResponse } from 'next/server'

type SubmitRequest = {
  fullName: string
  email: string
  year: string
  projectName: string
  category: string
  teamSize: string
  description: string
  github?: string
}

const propertyName = {
  title: process.env.NOTION_PROP_TITLE || 'Name',
  email: process.env.NOTION_PROP_EMAIL || 'Email',
  year: process.env.NOTION_PROP_YEAR || 'Year',
  projectName: process.env.NOTION_PROP_PROJECT_NAME || 'Project Name',
  category: process.env.NOTION_PROP_CATEGORY || 'Category',
  teamSize: process.env.NOTION_PROP_TEAM_SIZE || 'Team Size',
  description: process.env.NOTION_PROP_DESCRIPTION || 'Description',
  github: process.env.NOTION_PROP_GITHUB || 'GitHub',
} as const

const normalize = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

const buildProperties = (payload: SubmitRequest) => {
  const github = normalize(payload.github)

  return {
    [propertyName.title]: {
      title: [
        {
          text: {
            content: payload.fullName,
          },
        },
      ],
    },
    [propertyName.email]: {
      email: payload.email,
    },
    [propertyName.year]: {
      rich_text: [
        {
          text: {
            content: payload.year,
          },
        },
      ],
    },
    [propertyName.projectName]: {
      rich_text: [
        {
          text: {
            content: payload.projectName,
          },
        },
      ],
    },
    [propertyName.category]: {
      rich_text: [
        {
          text: {
            content: payload.category,
          },
        },
      ],
    },
    [propertyName.teamSize]: {
      rich_text: [
        {
          text: {
            content: payload.teamSize,
          },
        },
      ],
    },
    [propertyName.description]: {
      rich_text: [
        {
          text: {
            content: payload.description,
          },
        },
      ],
    },
    [propertyName.github]: {
      url: github || null,
    },
  }
}

const validatePayload = (body: unknown): { valid: true; payload: SubmitRequest } | { valid: false; error: string } => {
  const input = body as Partial<SubmitRequest>
  const payload: SubmitRequest = {
    fullName: normalize(input?.fullName),
    email: normalize(input?.email),
    year: normalize(input?.year),
    projectName: normalize(input?.projectName),
    category: normalize(input?.category),
    teamSize: normalize(input?.teamSize),
    description: normalize(input?.description),
    github: normalize(input?.github),
  }

  if (!payload.fullName || !payload.email || !payload.year || !payload.projectName || !payload.category || !payload.teamSize || !payload.description) {
    return { valid: false, error: 'Please fill all required fields before submitting.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { valid: false, error: 'Please provide a valid email address.' }
  }

  if (payload.github && !/^https?:\/\//i.test(payload.github)) {
    return { valid: false, error: 'GitHub/demo link must start with http:// or https://.' }
  }

  return { valid: true, payload }
}

export async function POST(req: Request) {
  const notionToken = process.env.NOTION_API_KEY
  const databaseId = process.env.NOTION_DATABASE_ID

  if (!notionToken || !databaseId) {
    const missing: string[] = []
    if (!notionToken) missing.push('NOTION_API_KEY')
    if (!databaseId) missing.push('NOTION_DATABASE_ID')

    return NextResponse.json(
      { error: `Server is not configured. Missing ${missing.join(', ')}.` },
      { status: 500 }
    )
  }

  const notion = new Client({ auth: notionToken })

  const body = await req.json().catch(() => null)
  const result = validatePayload(body)

  if (!result.valid) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  try {
    await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: buildProperties(result.payload),
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    if (isNotionClientError(error)) {
      return NextResponse.json(
        { error: `Notion error: ${error.message}` },
        { status: 400 }
      )
    }

    const message = error instanceof Error ? error.message : 'Unknown server error.'
    return NextResponse.json({ error: `Failed to save submission. ${message}` }, { status: 500 })
  }
}
