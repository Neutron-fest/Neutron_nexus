'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Globe, Layers, Radar } from 'lucide-react'

type StepType = 'text' | 'email' | 'select' | 'textarea' | 'url'

type Step = {
  id: string
  question: string
  subtext?: string
  type: StepType
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

type SubmissionPayload = {
  fullName: string
  email: string
  year: string
  projectName: string
  category: string
  teamSize: string
  description: string
  github?: string
}

const STEPS: Step[] = [
  {
    id: 'fullName',
    question: "What's your full name?",
    subtext: "This is how you'll appear on your showcase badge.",
    type: 'text',
    placeholder: 'e.g. Meet',
    required: true,
  },
  {
    id: 'email',
    question: 'Your email address?',
    subtext: "We'll send your confirmation and updates here.",
    type: 'email',
    placeholder: 'you@example.com',
    required: true,
  },
  {
    id: 'year',
    question: 'Which year are you in?',
    type: 'select',
    required: true,
    options: [
      { value: '1st-year', label: '1st Year' },
      { value: '2nd-year', label: '2nd Year' },
      { value: '3rd-year', label: '3rd Year' }
    ],
  },
  {
    id: 'projectName',
    question: 'What is your project or idea called?',
    subtext: 'Give it a name that sticks.',
    type: 'text',
    placeholder: 'e.g. AgroSense, NovaMind',
    required: true,
  },

  {
    id: 'teamSize',
    question: 'How many people are on your team?',
    type: 'select',
    required: true,
    options: [
      { value: 'solo', label: 'Solo - just me' },
      { value: '2', label: '2 members' },
      { value: '3', label: '3 members' },
      { value: '4', label: '4 members' },
      { value: '5+', label: '5 or more' },
    ],
  },
  {
    id: 'description',
    question: 'Describe your project.',
    subtext: 'What does it do? What problem does it solve? Who is it for?',
    type: 'textarea',
    placeholder: 'Tell us about it',
    required: true,
  },
  {
    id: 'github',
    question: 'Any GitHub or demo link?',
    subtext: 'Optional - share a repo, prototype, or live demo if you have one.',
    type: 'url',
    placeholder: 'https://github.com/you/project',
  },
]

export default function SubmitPage() {
  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [animating, setAnimating] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  const step = STEPS[current]
  const progress = submitted ? 100 : (current / STEPS.length) * 100

  useEffect(() => {
    if (step.type !== 'select') {
      const t = setTimeout(() => inputRef.current?.focus(), 200)
      return () => clearTimeout(t)
    }
  }, [current, step.type])

  const validate = (stepOverride?: Step, answersOverride?: Record<string, string>) => {
    const s = stepOverride ?? step
    const a = answersOverride ?? answers
    const val = (a[s.id] ?? '').trim()
    if (s.required && !val) {
      setError('This field is required to continue.')
      return false
    }
    if (s.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setError('Please enter a valid email address.')
      return false
    }
    return true
  }

  const transitionToNext = (targetIndex: number) => {
    setAnimating(true)
    setTimeout(() => {
      setCurrent(targetIndex)
      setAnimating(false)
    }, 200)
  }

  const submitToServer = async (payload: SubmissionPayload) => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null
      throw new Error(data?.error || 'Submission failed. Please try again.')
    }
  }

  const goNext = async (currentStep?: Step, currentAnswers?: Record<string, string>) => {
    const s = currentStep ?? step
    const a = currentAnswers ?? answers
    if (!validate(s, a)) return
    setError('')

    if (current < STEPS.length - 1) {
      transitionToNext(current + 1)
    } else {
      setIsSubmitting(true)
      try {
        await submitToServer({
          fullName: a.fullName?.trim() || '',
          email: a.email?.trim() || '',
          year: a.year?.trim() || '',
          projectName: a.projectName?.trim() || '',
          category: a.category?.trim() || '',
          teamSize: a.teamSize?.trim() || '',
          description: a.description?.trim() || '',
          github: a.github?.trim() || '',
        })
        setSubmitted(true)
      } catch (submitError) {
        const message = submitError instanceof Error ? submitError.message : 'Submission failed. Please try again.'
        setError(message)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const goPrev = () => {
    if (current > 0) {
      setError('')
      transitionToNext(current - 1)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && step.type !== 'textarea') {
      e.preventDefault()
      goNext()
    }
  }

  const setVal = (id: string, v: string) => {
    setAnswers((a) => ({ ...a, [id]: v }))
    if (error) setError('')
  }

  const handleSelectChange = (id: string, value: string) => {
    const newAnswers = { ...answers, [id]: value }
    setAnswers(newAnswers)
    setError('')
    setTimeout(() => {
      if (current < STEPS.length - 1) {
        transitionToNext(current + 1)
      } else {
        goNext(step, newAnswers)
      }
    }, 320)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020306] font-ibm-plex text-white">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />
        <span className="absolute -right-16 top-20 select-none font-orbitron text-[18vw] font-black italic text-white/1.5">
          SUBMIT
        </span>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #0ea5e908 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-b border-white/5 px-6 py-4 lg:px-10">
          <button
            onClick={() => router.push('/')}
            className="group inline-flex items-center gap-3 rounded-sm border border-white/10 bg-white/1 px-4 py-2"
          >
            <svg className="h-4 w-4 text-slate-500 transition-colors group-hover:text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-orbitron text-[11px] font-black uppercase tracking-[0.35em] text-slate-500 transition-colors group-hover:text-white">
              Neutron Nexus
            </span>
          </button>

          <div className="hidden items-center gap-3 rounded-sm border border-white/10 bg-white/1 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.35em] text-slate-500 sm:inline-flex">
            <Radar className="h-3.5 w-3.5 text-cyan-500" />
            {submitted ? 'Transmission Complete' : `Step ${current + 1} of ${STEPS.length}`}
          </div>
        </div>

        <div className="h-[2px] shrink-0 bg-white/4">
          <div className="h-full bg-cyan-400 transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 overflow-hidden">
          <aside className="hidden w-72 shrink-0 border-r border-white/5 px-6 py-8 lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="mb-6 text-[10px] font-mono uppercase tracking-[0.4em] text-slate-600">Launch checklist</p>
              <ul className="space-y-2.5">
                {STEPS.map((s, i) => (
                  <li key={s.id} className="flex items-center gap-3 rounded-sm border border-white/5 bg-white/1 px-3 py-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        submitted || i < current
                          ? 'bg-cyan-500'
                          : i === current
                            ? 'bg-white'
                            : 'bg-white/10'
                      }`}
                    />
                    <span
                      className={`text-[10px] uppercase tracking-[0.24em] ${
                        i === current && !submitted
                          ? 'text-white'
                          : submitted || i < current
                            ? 'text-slate-400'
                            : 'text-slate-700'
                      }`}
                    >
                      {s.question.length > 34 ? `${s.question.slice(0, 34)}...` : s.question}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 border border-dashed border-white/10 p-4">
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-slate-500">Delhi_NCR_Node</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-slate-500">Protocol V_4.0</span>
              </div>
            </div>
          </aside>

          <main className="flex flex-1 items-center justify-center overflow-y-auto px-6 py-10 sm:px-10">
            <div className="w-full max-w-2xl rounded-sm border border-white/10 bg-white/1 p-6 sm:p-8">
              {submitted ? (
                <div className="animate-slide-up space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-cyan-500/25 bg-cyan-500/8">
                    <span className="font-orbitron text-lg font-black text-cyan-400">OK</span>
                  </div>

                  <div>
                    <h2 className="font-orbitron text-3xl font-black uppercase italic text-white">Submission received.</h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                      Thanks, <span className="text-white">{answers.fullName}</span>. Your project
                      <span className="mx-1 text-cyan-400">{answers.projectName}</span>
                      is now in review. We will reach out at <span className="text-white">{answers.email}</span>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {['Confirmation sent', 'Review in progress', 'Showcase slot soon'].map((item) => (
                      <div key={item} className="rounded-sm border border-white/10 bg-[#03050a] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                        {item}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => router.push('/')}
                    className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-cyan-400"
                  >
                    <span>Back to home</span>
                  </button>
                </div>
              ) : (
                <div
                  key={current}
                  className={`transition-all duration-300 ease-out ${
                    animating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-cyan-500">
                      {String(current + 1).padStart(2, '0')} / {STEPS.length}
                    </span>
                    <div className="h-px w-16 bg-cyan-500/40" />
                  </div>

                  <h2 className="mb-2 font-orbitron text-3xl font-black uppercase italic leading-tight text-white sm:text-4xl">
                    {step.question}
                  </h2>

                  {step.subtext ? (
                    <p className="mb-8 text-sm uppercase tracking-wider text-slate-500">{step.subtext}</p>
                  ) : (
                    <div className="mb-8" />
                  )}

                  {step.type === 'select' ? (
                    <div className="space-y-2.5">
                      {step.options?.map((o) => (
                        <button
                          key={o.value}
                          onClick={() => handleSelectChange(step.id, o.value)}
                          className={`w-full rounded-sm border px-4 py-3 text-left text-sm transition-all ${
                            answers[step.id] === o.value
                              ? 'border-cyan-500/40 bg-cyan-500/8 text-white'
                              : 'border-white/10 bg-white/1 text-slate-400 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span className="uppercase tracking-[0.22em]">{o.label}</span>
                        </button>
                      ))}
                    </div>
                  ) : step.type === 'textarea' ? (
                    <textarea
                      ref={inputRef as React.Ref<HTMLTextAreaElement>}
                      value={answers[step.id] || ''}
                      onChange={(e) => setVal(step.id, e.target.value)}
                      onKeyDown={handleKey}
                      placeholder={step.placeholder}
                      rows={5}
                      className="w-full resize-none border-0 border-b-2 border-white/10 bg-[#03050a] px-3 py-3 text-base text-white outline-none transition-colors duration-300 placeholder:text-slate-700 focus:border-cyan-400"
                    />
                  ) : (
                    <input
                      ref={inputRef as React.Ref<HTMLInputElement>}
                      type={step.type}
                      value={answers[step.id] || ''}
                      onChange={(e) => setVal(step.id, e.target.value)}
                      onKeyDown={handleKey}
                      placeholder={step.placeholder}
                      className="w-full border-0 border-b-2 border-white/10 bg-[#03050a] px-3 py-3 text-2xl text-white outline-none transition-colors duration-300 placeholder:text-slate-700 focus:border-cyan-400 sm:text-3xl"
                    />
                  )}

                  {error && <p className="mt-3 text-xs text-red-400/90">{error}</p>}

                  {step.type !== 'select' && (
                    <div className="mt-10 flex items-center gap-4">
                      <button
                        onClick={() => goNext()}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-orbitron text-xs font-black uppercase tracking-[0.22em] text-white transition-colors hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Submitting
                          </>
                        ) : (
                          <>
                            {current === STEPS.length - 1 ? 'Submit' : 'Continue'}
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      {current > 0 && (
                        <button
                          onClick={goPrev}
                          className="text-sm uppercase tracking-[0.22em] text-slate-500 transition-colors hover:text-white"
                        >
                          Back
                        </button>
                      )}

                      {step.type === 'url' && (
                        <button
                          onClick={() => goNext()}
                          className="ml-auto text-sm uppercase tracking-[0.22em] text-slate-600 transition-colors hover:text-white"
                        >
                          Skip
                        </button>
                      )}

                      <span className="ml-auto hidden items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-slate-700 sm:flex">
                        Press
                        <kbd className="rounded-sm border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-600">Enter</kbd>
                      </span>
                    </div>
                  )}

                  {step.type === 'select' && current > 0 && (
                    <div className="mt-6">
                      <button
                        onClick={goPrev}
                        className="text-sm uppercase tracking-[0.22em] text-slate-500 transition-colors hover:text-white"
                      >
                        Back
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}