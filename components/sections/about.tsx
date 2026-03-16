'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const pillars = [
  {
    num: '01',
    title: 'Accelerated Validation',
    desc: 'Our framework verifies commercial viability at speed. From hypothesis to demonstration in a single high-stakes day.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tag: 'Execution Speed',
  },
  {
    num: '02',
    title: 'Executive Network',
    desc: 'Direct access to a curated circle of mentors, operators, and early-stage capital — connections that act as force multipliers.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    tag: 'Strategic Access',
  },
  {
    num: '03',
    title: 'Standard of Excellence',
    desc: 'Every project meets a rigorous criteria of innovation and execution. We define the standard for the next generation of builders.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    tag: 'Rigorous Benchmarks',
  },
]

const stats = [
  { label: 'Active Ventures', value: 44, suffix: '+' },
  { label: 'Industry Nodes', value: 12, suffix: '+' },
  { label: 'Tracks', value: 8, suffix: '+', prefix: '0' },
  { label: 'Network', value: 100, suffix: '%' },
]

function StatCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = countRef.current
    if (!node) return

    const controls = gsap.to({ val: 0 }, {
      val: value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: node,
        start: "top 90%",
      },
      onUpdate: function() {
        setCount(Math.floor(this.targets()[0].val))
      }
    })

    return () => {
      controls.kill()
    }
  }, [value])

  return (
    <span ref={countRef}>
      {prefix}{count < 10 && prefix === '0' ? `0${count}` : count}{suffix}
    </span>
  )
}

function StatItem({ label, value, prefix, suffix }: { label: string; value: number; prefix?: string; suffix?: string }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="stat-item group relative flex-1 py-12 px-8 border-r border-white/5 last:border-r-0 space-y-3 overflow-hidden transition-colors duration-500 hover:bg-white/2"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`
          ),
        }}
      />
      
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-[2px] h-4 bg-white/20 translate-x-[0.5px]" />
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-white/20 translate-y-[-0.5px]" />
      </div>

      <div className="relative z-10 space-y-3">
        <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/25 font-medium block group-hover:text-white/40 transition-colors duration-300">
          {label}
        </span>
        <div className="font-outfit font-black text-[clamp(2rem,5vw,3.5rem)] text-white leading-none tracking-tighter">
          <StatCounter value={value} prefix={prefix} suffix={suffix} />
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-white/5 group-hover:bg-white/20 group-hover:scale-[2] transition-all duration-500" />
    </div>
  )
}

function PillarRow({
  pillar,
  index,
  isActive,
  setActiveId,
  isMobile,
  isAnyActive,
}: {
  pillar: any;
  index: number;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
  isMobile: boolean;
  isAnyActive: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null)
  const isDimmed = isAnyActive && !isActive

  useEffect(() => {
    if (!isMobile) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveId(pillar.num)
      },
      { threshold: 0.6 }
    )
    if (rowRef.current) observer.observe(rowRef.current)
    return () => observer.disconnect()
  }, [isMobile, pillar.num, setActiveId])

  return (
    <motion.div
      ref={rowRef}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: isDimmed ? 0.25 : 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => !isMobile && setActiveId(pillar.num)}
      onMouseLeave={() => !isMobile && setActiveId(null)}
      className="group relative border-t border-white/10 last:border-b cursor-default overflow-hidden"
    >
      <motion.div
        animate={{ backgroundColor: isActive ? 'rgba(255,255,255,0.02)' : 'transparent' }}
        transition={{ duration: 0.3 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-[100px_1.5fr_0.8fr_1.5fr] gap-6 md:gap-16 py-12 md:py-16 items-start transition-all duration-500 px-0 md:px-4"
      >
        <motion.span
          animate={{ opacity: isActive ? 1 : 0.2 }}
          transition={{ duration: 0.3 }}
          className="font-serif italic text-[11px] text-white/40 hidden md:block pt-2"
        >
          {pillar.num}
        </motion.span>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 md:hidden mb-1">
            <span className="font-serif italic text-[10px] text-white/40">{pillar.num}</span>
            <span className="text-[9px] font-outfit font-medium uppercase tracking-[0.3em] text-white/30 border border-white/10 px-2 py-0.5 rounded-sm">
              {pillar.tag}
            </span>
          </div>
          <motion.h3
            animate={{
              x: isActive ? 10 : 0,
              color: isActive ? '#fff' : 'rgba(255,255,255,0.3)',
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-outfit font-black uppercase transition-colors duration-300"
            style={{
              fontSize: 'clamp(24px, 3.2vw, 42px)',
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
            }}
          >
            {pillar.title}
          </motion.h3>
        </div>

        <div className="hidden md:flex flex-col items-start gap-3">
          <motion.span
            animate={{ opacity: isActive ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[9px] font-outfit font-semibold uppercase tracking-[0.4em] text-white border border-white/20 px-3 py-1 rounded-sm whitespace-nowrap"
          >
            {pillar.tag}
          </motion.span>
        </div>

        <motion.p
          animate={{ 
            opacity: isActive ? 1 : 0.3,
            x: isActive ? 0 : -5
          }}
          transition={{ duration: 0.4 }}
          className="font-serif italic text-[1rem] leading-relaxed text-white/70 max-w-md"
        >
          {pillar.desc}
        </motion.p>
      </motion.div>

      <AnimatePresence>
        {isMobile && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 px-2">
              <div className="relative w-full aspect-4/3 rounded-sm overflow-hidden border border-white/10">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.5em] text-white/50">
                  {pillar.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springCfg = { damping: 30, stiffness: 350, mass: 0.1 }
  const cursorX = useSpring(mouseX, springCfg)
  const cursorY = useSpring(mouseY, springCfg)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return
    mouseX.set(e.clientX + 30)
    mouseY.set(e.clientY + 30)
  }

  const activePillar = pillars.find(p => p.num === activeId)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.stats-wrapper', start: 'top 85%' },
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        ref={containerRef}
        id="vision"
        onMouseMove={handleMouseMove}
        className="relative w-full bg-black section-grain py-48 px-6 lg:px-20 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ y }}
            className="absolute right-0 top-10 font-outfit font-black text-[22vw] text-white/[0.012] uppercase select-none leading-none pointer-events-none"
          >
            VISION
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-32">
          <div className="flex flex-col gap-16" ref={headingRef}>
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start lg:items-end">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-outfit font-black text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.88] text-white uppercase tracking-tight shrink-0"
              >
                The Scale<br />
                <span className="font-serif italic font-normal text-[#d2e6ff]">of Ambition.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="max-w-md space-y-6 border-l border-white/10 pl-12"
              >
                <p className="font-serif italic text-[1.15rem] text-white/40 leading-relaxed">
                  Neutron Nexus is not merely an event — it is a high-fidelity assembly. We merge the raw agility of a startup foundry with the strategic reach of a global launchpad.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-white/10" />
                  <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white/20 block font-medium">
                    Objective 2026
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="pillars-wrapper flex flex-col w-full">
            {pillars.map((p, i) => (
              <PillarRow
                key={p.num}
                pillar={p}
                index={i}
                isActive={activeId === p.num}
                setActiveId={setActiveId}
                isMobile={isMobile}
                isAnyActive={activeId !== null}
              />
            ))}
          </div>

          <div className="stats-wrapper relative flex flex-col sm:flex-row gap-0 border-t border-y border-white/5 overflow-hidden">
            <motion.div
              animate={{
                y: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none"
            />
            
            {stats.map((s) => (
              <StatItem 
                key={s.label}
                label={s.label}
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed left-0 top-0 z-1000 hidden md:block"
        >
          <AnimatePresence mode="wait">
            {activeId && activePillar && (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', rotate: -2 }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, filter: 'blur(10px)', rotate: 2 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-72 w-96 overflow-hidden rounded-sm border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black"
              >
                <img
                  src={activePillar.image}
                  alt={activePillar.title}
                  className="h-full w-full object-cover grayscale brightness-75 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
                  <span className="text-[10px] font-outfit uppercase tracking-[0.4em] text-white/40">
                    {(activePillar as any).tag}
                  </span>
                  <span className="text-[20px] font-outfit font-black uppercase text-white leading-none tracking-tight">
                    {(activePillar as any).title}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-sm ring-1 ring-white/10 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  )
}

