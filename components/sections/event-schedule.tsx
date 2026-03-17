'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const schedule = [
  { time: '1', period: '', title: 'EVENT VISION', description: 'Create an open innovation event where students showcase their work, present startup ideas, and interact with mentors.', venue: '' },
  { time: '2', period: '', title: 'STARTUP FOUNDRY / CODECRAFT ARENA / BUILDLAB EXPO', description: 'Startup presentations, software & AI demos, and hardware/IoT showcases with live interaction.', venue: 'Mini Auditorium' },
  { time: '3', period: '', title: 'FOOD & INFORMAL NETWORKING', description: 'Networking lunch enabling conversations between students, mentors, and industry experts.', venue: '' },
  { time: '4', period: '', title: 'IDEA PITCHING / DISCUSSION FORUMS / COMPETITIONS', description: 'Idea pitching sessions, interactive discussions, and technology-based competitions.', venue: ' ' },
  { time: '5', period: '', title: 'MENTOR & INDUSTRY PARTICIPATION / BRAND SHOWCASE', description: 'Final presentations, mentor evaluations, and showcasing student innovation and projects.', venue: '' },
]

export default function EventSchedule() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.schedule-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.schedule-list', start: 'top 80%' },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="schedule"
      className="relative w-full bg-black section-grain py-6 lg:py-36 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10 bg-white/30" />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white/35 font-medium">
              Assembly Timeline
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight"
          >
            Operational<br />
            <span className="font-serif italic font-normal text-white/25">Schedule.</span>
          </motion.h2>
        </div>

        <div className="schedule-list flex flex-col">
          {schedule.map((item, i) => (
            <div
              key={item.title}
              className={`schedule-item group flex flex-col sm:flex-row gap-8 sm:items-center py-10 border-t border-white/5 hover:border-white/10 transition-all duration-500 ${i === schedule.length - 1 ? 'border-b border-white/5 hover:border-b-white/10' : ''}`}
            >
              <div className="shrink-0 sm:w-28">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-outfit font-black text-[1.65rem] text-white leading-none tracking-tight">{item.time}</span>
                  <span className="font-outfit text-[10px] text-white/30 uppercase tracking-widest font-medium">{item.period}</span>
                </div>
              </div>

              <div className="h-px w-12 bg-white/10 hidden sm:block shrink-0 group-hover:w-20 group-hover:bg-white/30 transition-all duration-500" />

              <div className="flex-1 space-y-2">
                <h3 className="font-outfit font-black text-[1.15rem] text-white uppercase tracking-tight group-hover:translate-x-1 transition-transform duration-400">{item.title}</h3>
                <p className="font-serif italic text-[0.9rem] text-white/35 leading-relaxed max-w-lg">{item.description}</p>
              </div>

              <div className="shrink-0 sm:text-right">
                <span className="font-outfit text-[9px] uppercase tracking-[0.4em] text-white/20 font-medium">{item.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
