'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

import SiriOrb from '@/components/ui/smoothui/siri-orb'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)
  const ctaBottomRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const orbScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.85])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const orbOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    tl.fromTo(metaRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.6 })
      .fromTo(headlineRef.current,
        { y: 60, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.3 },
        '-=0.5'
      )
      .fromTo(subRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7')
      .fromTo(ctaBottomRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black section-grain overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 75% 35%, rgba(80,100,180,0.04) 0%, transparent 70%)',
        }}
      />

      <motion.div
        ref={metaRef}
        style={{ opacity: contentOpacity }}
        className="absolute top-28 left-6 lg:left-16 z-20 opacity-0"
      >
        <div className="flex flex-col gap-2">
          <span className="font-outfit text-[9px] uppercase tracking-[0.6em] text-white/25 font-medium">
            Innovation Assembly
          </span>
          <span className="font-outfit text-[9px] uppercase tracking-[0.6em] text-white/20 font-medium">
            28 March 2026 — Delhi NCR
          </span>
        </div>
      </motion.div>

      <motion.div
        style={{ y: orbY, scale: orbScale, opacity: orbOpacity, top: '-5%', right: '-5%' }}
        className="absolute flex items-start justify-end z-10 pointer-events-none"
      >
        <SiriOrb size="clamp(400px, 60vw, 800px)" className="opacity-80" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-6 lg:left-16 z-20 right-0 pr-6 lg:pr-16"
      >
        <div className="flex flex-col gap-5">
          <h1
            ref={headlineRef}
            className="opacity-0 leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.2rem, 8.5vw, 9.5rem)' }}
          >
            <em className="font-serif italic font-light text-white" style={{ fontStyle: 'italic' }}>
              Where Student
            </em>
            <br />
            <span className="font-outfit font-black text-white uppercase">
              Innovation
            </span>
            <br />
            <em className="font-serif italic font-light text-white/70" style={{ fontStyle: 'italic' }}>
              Meets Industry.
            </em>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
            <p
              ref={subRef}
              className="font-outfit text-[13px] text-white/40 max-w-md leading-relaxed tracking-wide opacity-0"
            >
              Empowering the next generation of founders to build, pitch, and scale with unprecedented precision.
            </p>

            <div ref={ctaBottomRef} className="flex items-center gap-6 shrink-0 opacity-0">
              <button
                onClick={() => window.open(SUBMISSION_URL, '_blank')}
                className="group flex items-center gap-4 border border-white/20 rounded-full px-7 py-3.5 hover:bg-white hover:border-white transition-all duration-500"
              >
                <span className="font-outfit text-[11px] uppercase tracking-[0.25em] text-white group-hover:text-black transition-colors duration-300 font-semibold">
                  Submit Project
                </span>
                <span className="font-outfit text-[13px] text-white group-hover:text-black transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>

              <button
                onClick={() => document.querySelector('#vision')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-outfit text-[10px] uppercase tracking-[0.4em] text-white/25 hover:text-white/60 transition-colors duration-300"
              >
                Explore ↓
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 right-6 lg:right-16 z-0" />
    </section>
  )
}