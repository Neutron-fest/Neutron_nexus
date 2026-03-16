'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    index: '01',
    category: 'Fintech',
    title: 'Project Alpha',
    description: 'A decentralized liquidity protocol for emerging markets. Built for high-frequency, low-latency execution at institutional scale.',
    tags: ['Solidity', 'Next.js', 'Rust'],
  },
  {
    index: '02',
    category: 'AI & ML',
    title: 'Neural Core',
    description: 'Distributed compute orchestration for small-scale LLM fine-tuning, optimized for edge device deployment and inference.',
    tags: ['Python', 'PyTorch', 'gRPC'],
  },
  {
    index: '03',
    category: 'Cybersecurity',
    title: 'Sentinel',
    description: 'Zero-knowledge proofs for privacy-first identity verification on public ledger systems. Privacy by architecture.',
    tags: ['Wasm', 'Go', 'ZK-SNARKs'],
  },
]

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section
      ref={containerRef}
      id="grid"
      className="relative w-full bg-black section-grain py-36 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ x }}
          className="absolute top-1/2 -translate-y-1/2 font-outfit font-black text-[22vw] text-white/[0.018] uppercase select-none whitespace-nowrap leading-none"
        >
          VENTURES //
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-white/[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
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
                Project Repository
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit font-black text-[clamp(3rem,8vw,7rem)] leading-[0.92] text-white uppercase tracking-tight"
            >
              Active<br />
              <span className="font-serif italic font-normal text-white/25">Ventures.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-serif italic text-[0.95rem] text-white/35 max-w-sm leading-relaxed border-l border-white/[0.06] pl-10 lg:pb-4"
          >
            High-potential ventures being developed at Nexus — each representing a unique hypothesis tested on the innovation floor.
          </motion.p>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-t border-white/[0.05] hover:border-white/10 transition-all duration-500 cursor-default"
            >
              <span className="font-serif italic text-[11px] text-white/20 pt-1 shrink-0 w-8">{project.index}</span>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 flex-1">
                <div className="lg:w-52 shrink-0 space-y-2">
                  <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/20 font-medium block">{project.category}</span>
                  <h3 className="font-outfit font-black text-[1.35rem] text-white uppercase tracking-tight leading-tight group-hover:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="font-serif italic text-[0.92rem] text-white/35 leading-relaxed lg:max-w-md lg:pt-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 lg:ml-auto lg:pt-7 items-start content-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-outfit text-[8px] uppercase tracking-[0.3em] text-white/25 border border-white/10 px-3 py-1.5 hover:border-white/25 hover:text-white/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex items-center text-white/10 group-hover:text-white/40 transition-colors duration-500 self-center text-lg">
                →
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.04]" />
        </div>
      </div>
    </section>
  )
}
