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
    title: 'Innovation First Ecosystem',
    desc: 'We create a dynamic environment where students turn ideas into real-world solutions through hands-on projects, startup building, and continuous experimentation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tag: 'Build. Break. Innovate.',
  },
  {
    num: '02',
    title: 'Where Ideas Meet Execution',
    desc: 'From startup pitches to working software and hardware prototypes, we bridge the gap between concepts and execution by enabling students to showcase, validate, and refine their ideas with expert feedback.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    tag: 'Ideas into Impact.',
  },
  {
    num: '03',
    title: 'Community Driven Growth',
    desc: 'We foster a collaborative culture where students, mentors, and industry experts connect, exchange ideas, and grow together through discussions, mentorship, and shared learning experiences.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    tag: 'Build. Grow.',
  },
]

const stats = [
  { label: 'Startup Projects', value: 44, suffix: '+' },
  { label: 'Industry Nodes', value: 12, suffix: '+' },
  { label: 'Tracks', value: 8, suffix: '+'},
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
      className={`stat-item group relative flex-1 py-12 px-8 border-white/5 space-y-3 overflow-hidden transition-colors duration-500 hover:bg-white/2
        border-b md:border-b-0
        nth-1:border-r nth-2:border-r-0 md:nth-2:border-r
        nth-3:border-r nth-3:border-b-0
        nth-4:border-0 md:nth-3:border-r
      `}
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
        className="relative w-full bg-black section-grain pt-24 md:pt-48 px-6 lg:px-20 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ y }}
            className="absolute right-0 top-10 font-outfit font-black text-[22vw] text-white/[0.012] uppercase select-none leading-none pointer-events-none"
          >
            VISION
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20 md:gap-32">
          <div className="flex flex-col gap-12 md:gap-16" ref={headingRef}>
            <div className="flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-32 items-start lg:items-end">
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
                className="max-w-md space-y-6 border-l border-white/10 pl-6 md:pl-12"
              >
                <p className="font-serif italic text-sm md:text-xl text-white/40 leading-relaxed">
                  Neutron Nexus is not merely an event — but to build a unified platform that empowers students to innovate, showcase, and scale impactful ideas.
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
          <div className="flex flex-col gap-20 pt-24 border-t border-white/5">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
              <div className="flex flex-col gap-6 max-w-xl">
                 <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-px w-8 bg-[#d2e6ff]/30" />
                    <span className="font-outfit text-[10px] uppercase tracking-[0.4em] text-[#d2e6ff]/50 font-medium">
                      Student Ecosystem
                    </span>
                  </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-outfit font-black text-[clamp(2rem,5vw,4rem)] leading-none text-white uppercase tracking-tight"
                >
                  What's in it<br />
                  <span className="font-serif italic font-normal text-white/30">For the Builders.</span>
                </motion.h3>
                <p className="font-serif italic text-white/50 text-lg leading-relaxed border-l border-white/10 pl-8">
                  We provide the infrastructure for radical growth. Not just a hackathon, but a launchpad for the next generation of technical founders.
                </p>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  {
                    title: 'Direct Mentorship from Industry Experts',
                    importance: 'Technical Mastery',
                    desc: 'Connect with technical leaders from Microsoft and Google for high-fidelity guidance on your stack.'
                  },
                  {
                    title: 'Showcase Your Idea to Investors',
                    importance: 'Market Fit',
                    desc: 'Showcase your ideas to the real investors and mentors who understand deep-tech and commercial scalability.'
                  },
                  {
                    title: 'Enhance Networking with the Founders',
                    importance: 'Build Connections',
                    desc: 'Build connections with the brightest minds in the country and take your ideas to the next level.'
                  },
                  {
                    title: 'Multiple Exhibitions for Exposure',
                    importance: 'Exposure',
                    desc: 'Showcase your project to a diverse audience and get valuable feedback from peers and mentors.'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col gap-4 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-serif italic text-xs text-[#d2e6ff]/40">0{idx + 1}</span>
                      <h4 className="font-outfit font-bold text-lg text-white uppercase tracking-tight group-hover:text-[#d2e6ff] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <span className="inline-block text-[8px] font-outfit font-black uppercase tracking-[0.3em] text-[#d2e6ff]/60 border border-[#d2e6ff]/20 px-2 py-0.5 rounded-sm">
                        {item.importance}
                      </span>
                      <p className="font-serif italic text-sm text-white/40 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Journey Section */}
          <div id="journey" className="flex flex-col gap-24 py-24 border-t border-white/5">
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-px w-8 bg-[#d2e6ff]/30" />
                <span className="font-outfit text-[10px] uppercase tracking-[0.4em] text-[#d2e6ff]/50 font-medium">
                  The Learning Curve
                </span>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-outfit font-black text-[clamp(2rem,5vw,4rem)] leading-none text-white uppercase tracking-tight"
              >
                The Road to<br />
                <span className="font-serif italic font-normal text-white/30">Hard Execution.</span>
              </motion.h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Strategic Framing',
                  importance: 'Vision Alignment',
                  desc: 'Master the art of narrative. Align your technical vision with market needs and strategic objectives.',
                  icon: '01'
                },
                {
                  title: 'Product Foundry',
                  importance: 'Technical Validation',
                  desc: 'Stress-test your stack. Move from theoretical models to high-fidelity, working prototypes.',
                  icon: '02'
                },
                {
                  title: 'Architecture Sync',
                  importance: 'Scaling Logic',
                  desc: 'Direct interaction with system architects to refine infrastructure and performance bottlenecks.',
                  icon: '03'
                },
                {
                  title: 'Venture Readiness',
                  importance: 'Market Fit',
                  desc: 'Transform prototypes into viable entities. Validate commercial logic and investor appeal.',
                  icon: '04'
                },
                {
                  title: 'Brand Excellence',
                  importance: 'Builder Identity',
                  desc: 'Establish your footprint in the ecosystem through peer review and expert certification.',
                  icon: '05'
                }
              ].map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative h-full flex flex-col p-8 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6">
                    <span className="font-serif italic text-4xl text-white/3 group-hover:text-[#d2e6ff]/5 transition-colors duration-500">
                      {step.icon}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col h-full gap-6">
                    <div className="space-y-4">
                      <h4 className="font-outfit font-bold text-xl text-white uppercase tracking-tight group-hover:text-[#d2e6ff] transition-colors">
                        {step.title}
                      </h4>
                      <div className="inline-block px-3 py-1 rounded-sm border border-[#d2e6ff]/20 bg-[#d2e6ff]/5">
                        <span className="font-outfit text-[9px] font-black uppercase tracking-[0.2em] text-[#d2e6ff]/70">
                          {step.importance}
                        </span>
                      </div>
                    </div>
                    <p className="font-serif italic text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                      {step.desc}
                    </p>
                    
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <div className="w-6 h-px bg-white/10 group-hover:w-10 group-hover:bg-[#d2e6ff]/40 transition-all duration-500" />
                      <span className="text-[10px] font-outfit uppercase tracking-widest text-white/20 group-hover:text-[#d2e6ff]/40 transition-colors">
                        Phase {step.icon}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center text-center"
              >
                <p className='font-outfit font-black text-xl leading-none text-white uppercase tracking-tight'>
                  Have an idea? and want to showcase it to the world?
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdVBHCEojiKZQrEvNoaiggGjnbN8dPKi-Fe-cVWLXhtQxfWuA/viewform?usp=sharing&ouid=117406261044074584609" 
                  className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all duration-500 hover:border-[#d2e6ff]/50"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-[#d2e6ff]/0 via-[#d2e6ff]/5 to-[#d2e6ff]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10 font-outfit text-[11px] uppercase tracking-[0.6em] font-black text-white group-hover:text-[#d2e6ff] transition-colors">
                    PITCH YOUR IDEA
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
