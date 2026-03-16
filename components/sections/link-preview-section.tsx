'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LinkPreview } from '@/components/ui/link-preview'

const externalLinks = [
  {
    label: 'Rishihood University',
    url: 'https://rishihood.edu.in',
    desc: 'The institutional anchor of innovation.',
  },
  {
    label: 'Submit Venture',
    url: 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1',
    desc: 'Official submission portal for founders.',
  },
  {
    label: 'Innovation Protocol',
    url: 'https://ycombinator.com',
    desc: 'Learnings from the global foundry.',
  },
]

export default function LinkPreviewSection() {
  return (
    <section className="relative w-full bg-black section-grain py-36 px-6 lg:px-20 overflow-hidden border-t border-white/[0.05]">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20">
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
              External Nodes
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-outfit font-black text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] text-white uppercase tracking-tight"
          >
            Digital<br />
            <span className="font-serif italic font-normal text-white/25">Ecosystem.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {externalLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
              className="group space-y-4"
            >
              <LinkPreview
                url={link.url}
                className="font-outfit font-black text-[1.4rem] text-white uppercase tracking-tight group-hover:text-white/80 transition-colors"
                width={300}
                height={200}
              >
                {link.label}
              </LinkPreview>
              <p className="font-serif italic text-[0.9rem] text-white/35 leading-relaxed">
                {link.desc}
              </p>
              <div className="h-px w-full bg-white/[0.05] group-hover:bg-white/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
