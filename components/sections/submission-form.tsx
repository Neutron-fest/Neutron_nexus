'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SubmissionFormProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

type Step = {
  id: string
  question: string
  subtext?: string
  type: 'text' | 'email' | 'select' | 'textarea' | 'url'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
}

const STEPS: Step[] = [
  {
    id: 'fullName',
    question: "What's your full name?",
    subtext: 'This is how you\'ll appear on your showcase badge.',
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
      { value: '3rd-year', label: '3rd Year' },
    ],
  },
  {
    id: 'projectName',
    question: 'What is your project or idea called?',
    subtext: 'Give it a name that sticks.',
    type: 'text',
    placeholder: 'e.g. AgroSense, NovaMind…',
    required: true,
  },
  {
    id: 'teamSize',
    question: 'How many people are on your team?',
    type: 'select',
    required: true,
    options: [
      { value: 'solo', label: 'Solo' },
      { value: '2', label: '2 members' },
      { value: '3', label: '3 members' },
      { value: '4', label: '4 members' },
      { value: '5+', label: '5+ members' },
    ],
  },
  {
    id: 'description',
    question: 'Describe your project briefly.',
    subtext: 'What does it do? What problem does it solve? Who is it for?',
    type: 'textarea',
    placeholder: 'Give us the pitch…',
    required: true,
  },
  {
    id: 'github',
    question: 'Any GitHub / demo link? (optional)',
    subtext: 'Share a repo, prototype, or live demo url if available.',
    type: 'url',
    placeholder: 'https://github.com/you/project',
  },
]

export default function SubmissionForm({ open = false, onOpenChange }: SubmissionFormProps) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  const step = STEPS[current]
  const progress = ((current) / STEPS.length) * 100

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Auto-focus input
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open, current])

  const close = useCallback(() => {
    onOpenChange?.(false)
    // Reset on close with a small delay
    setTimeout(() => {
      setCurrent(0)
      setAnswers({})
      setError('')
      setSubmitted(false)
    }, 300)
  }, [onOpenChange])

  const validate = () => {
    const val = (answers[step.id] || '').trim()
    if (step.required && !val) {
      setError('This field is required.')
      return false
    }
    if (step.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setError('Please enter a valid email.')
      return false
    }
    return true
  }

  const goNext = async () => {
    if (!validate()) return
    setError('')

    if (current < STEPS.length - 1) {
      setCurrent((c) => c + 1)
    } else {
      // Submit
      setIsSubmitting(true)
      await new Promise((r) => setTimeout(r, 1600))
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => close(), 3500)
    }
  }

  const goPrev = () => {
    if (current > 0) {
      setError('')
      setCurrent((c) => c - 1)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && step.type !== 'textarea') {
      e.preventDefault()
      goNext()
    }
  }

  const setVal = (v: string) => setAnswers((a) => ({ ...a, [step.id]: v }))

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0f] flex flex-col">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="font-orbitron text-xs font-bold text-white tracking-widest">NEUTRON NEXUS</span>
          <span className="font-ibm-plex text-[10px] text-neutral-600">/ Register Now</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-ibm-plex text-[11px] text-neutral-600 hidden sm:block">
            {submitted ? 'Complete' : `${current + 1} of ${STEPS.length}`}
          </span>
          <button
            onClick={close}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] text-neutral-500 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-px bg-white/[0.05] relative">
        <div
          className="absolute top-0 left-0 h-full bg-cyan-400 transition-all duration-500 ease-out"
          style={{ width: `${submitted ? 100 : progress}%` }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-xl">

          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div className="text-center space-y-6">
              <div className="inline-flex w-16 h-16 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 items-center justify-center text-3xl mx-auto">
                🎉
              </div>
              <div>
                <h2 className="font-orbitron text-2xl font-black text-white mb-2">Submission received.</h2>
                <p className="font-ibm-plex text-sm text-neutral-400">
                  Thanks, <span className="text-white">{answers.fullName}</span>. We&apos;ve got your project <span className="text-cyan-400">{answers.projectName}</span> — we&apos;ll be in touch soon.
                </p>
              </div>
              <div className="inline-block font-ibm-plex text-[11px] text-neutral-600">
                $ status <span className="text-green-400">✔ submitted</span>
              </div>
            </div>
          ) : (
            /* ── QUESTION STEP ── */
            <div key={current} className="animate-slide-up">
              {/* Step number */}
              <div className="flex items-center gap-2 mb-6">
                <span className="font-ibm-plex text-xs text-cyan-400/70 tabular-nums">
                  {String(current + 1).padStart(2, '0')}
                </span>
                <span className="text-neutral-700">→</span>
              </div>

              {/* Question */}
              <h2 className="font-orbitron text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                {step.question}
              </h2>
              {step.subtext && (
                <p className="font-ibm-plex text-sm text-neutral-500 mb-8">{step.subtext}</p>
              )}
              {!step.subtext && <div className="mb-8" />}

              {/* Input */}
              {step.type === 'select' ? (
                <Select
                  value={answers[step.id] || ''}
                  onValueChange={(v) => { setVal(v); setError('') }}
                >
                  <SelectTrigger className="w-full h-14 bg-[#03050a] border-0 border-b-2 border-white/15 rounded-none text-white font-ibm-plex text-lg focus:border-cyan-400 focus:ring-0 transition-colors duration-200 px-3">
                    <SelectValue placeholder="Select an option…" className="text-neutral-500" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111116] border-white/10 font-ibm-plex">
                    {step.options?.map((o) => (
                      <SelectItem key={o.value} value={o.value} className="text-neutral-300 hover:text-white focus:text-white focus:bg-white/5 text-base py-3">
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : step.type === 'textarea' ? (
                <textarea
                  ref={inputRef as React.Ref<HTMLTextAreaElement>}
                  value={answers[step.id] || ''}
                  onChange={(e) => { setVal(e.target.value); setError('') }}
                  onKeyDown={handleKey}
                  placeholder={step.placeholder}
                  rows={4}
                  className="w-full bg-[#03050a] border-0 border-b-2 border-white/15 focus:border-cyan-400 outline-none text-white font-ibm-plex text-base placeholder:text-neutral-600 resize-none px-3 py-3 transition-colors duration-200"
                />
              ) : (
                <input
                  ref={inputRef as React.Ref<HTMLInputElement>}
                  type={step.type}
                  value={answers[step.id] || ''}
                  onChange={(e) => { setVal(e.target.value); setError('') }}
                  onKeyDown={handleKey}
                  placeholder={step.placeholder}
                  className="w-full bg-[#03050a] border-0 border-b-2 border-white/15 focus:border-cyan-400 outline-none text-white font-ibm-plex text-xl sm:text-2xl placeholder:text-neutral-600 px-3 py-3 transition-colors duration-200"
                />
              )}

              {/* Error */}
              {error && (
                <p className="font-ibm-plex text-xs text-red-400 mt-3">{error}</p>
              )}

              {/* Actions */}
              <div className="flex items-center gap-3 mt-10">
                <button
                  onClick={goNext}
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2 font-ibm-plex text-sm px-6 py-3 rounded-lg bg-cyan-400 text-neutral-950 font-semibold hover:bg-cyan-300 transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    <>
                      {current === STEPS.length - 1 ? 'Submit' : 'Continue'}
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>

                {current > 0 && (
                  <button
                    onClick={goPrev}
                    className="inline-flex items-center gap-1.5 font-ibm-plex text-sm text-neutral-500 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                  </button>
                )}

                {step.type !== 'select' && (
                  <span className="ml-auto font-ibm-plex text-[11px] text-neutral-600 hidden sm:block">
                    press <kbd className="px-1.5 py-0.5 rounded border border-white/10 text-neutral-500">Enter ↵</kbd>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom terminal hint */}
      {!submitted && (
        <div className="px-6 py-3 border-t border-white/[0.05]">
          <p className="font-ibm-plex text-[11px] text-neutral-700">
            $ submit --step={current + 1}/{STEPS.length}{' '}
            {answers[step.id] && <span className="text-neutral-600">--{step.id}=&quot;{answers[step.id].slice(0, 20)}{answers[step.id].length > 20 ? '…' : ''}&quot;</span>}
          </p>
        </div>
      )}
    </div>
  )
}
