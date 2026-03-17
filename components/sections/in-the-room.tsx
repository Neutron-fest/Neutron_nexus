'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const mediaItems = [
  { id: 1, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dbca62f1ae9a166f26454_Instagram%20story%20-%202-1.avif', title: 'Architecture Session' },
  { id: 2, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6762d9cc7fb43118f36e1622_WhatsApp%20Image%202024-12-18%20at%2019.07.11_0ebdcbde.avif', title: 'Strategy Briefing' },
  { id: 3, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6762d9cc35bb6b0be9675c94_WhatsApp%20Image%202024-12-18%20at%2019.13.21_5ac2a662.avif', title: 'Development Sprint' },
  { id: 4, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dbb092686e716bedae586_Instagram%20story%20-%201.avif', title: 'Project Alignment' },
  { id: 5, src: 'https://ik.imagekit.io/yatharth/image.png', title: 'System Design' },
  { id: 6, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dbbcb747e94b97157e791_Instagram%20story%20-%202.avif', title: 'Nexus Integration' },
  { id: 7, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6762d9cc3742cd17ee9c2335_WhatsApp%20Image%202024-12-18%20at%2019.13.48_72e85a55.avif', title: 'Core Validation' },
  { id: 8, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dbb0a0f407512a2700f57_Instagram%20story%20-%202-1.avif', title: 'Scale Planning' },
  { id: 9, src: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dbb0ad5a5528c9855e189_Instagram%20story%20-%201-1.avif', title: 'Executive Review' },
]

function MediaCard({ 
  src, 
  title, 
  isActive, 
  isAnyActive, 
  onHoverStart, 
  onHoverEnd 
}: { 
  src: string; 
  title: string; 
  isActive: boolean; 
  isAnyActive: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isImage = /\.(jpeg|jpg|png|gif|webp|avif|svg)/i.test(src.split('?')[0])

  useEffect(() => {
    if (!isImage && isActive) {
      videoRef.current?.play().catch(() => {})
    } else if (!isImage) {
      videoRef.current?.pause()
      if (videoRef.current) videoRef.current.currentTime = 0
    }
  }, [isActive, isImage])

  return (
    <motion.div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      animate={{
        scale: isActive ? 1.05 : isAnyActive ? 0.95 : 1,
        filter: isActive ? 'grayscale(0%)' : isAnyActive ? 'grayscale(100%)' : 'grayscale(30%)',
        opacity: isActive ? 1 : isAnyActive ? 0.4 : 0.7,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/5"
    >
      {isImage ? (
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end">
        <motion.span 
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
          className="font-outfit text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1"
        >
          Session Archive
        </motion.span>
        <motion.h4 
          animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 0 }}
          className="font-outfit font-bold text-sm text-white uppercase tracking-tighter"
        >
          {title}
        </motion.h4>
      </div>
      
      {/* Corner Pulse Accent */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 right-4"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function InTheRoom() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section id="sessions" className="relative w-full bg-black py-6 lg:py-36 px-6 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            <div className="h-px w-10 bg-white/30" />
            <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white/35 font-medium">
              Venture Presence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-outfit font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-white uppercase tracking-tight"
          >
            Experience<br />
            <span className="font-serif italic font-normal text-white/20">The Room.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mediaItems.map((item) => (
            <MediaCard
              key={item.id}
              src={item.src}
              title={item.title}
              isActive={activeId === item.id}
              isAnyActive={activeId !== null}
              onHoverStart={() => setActiveId(item.id)}
              onHoverEnd={() => setActiveId(null)}
            />
          ))}
        </div>

        <div className="md:mt-12 flex justify-between items-end border-t border-white/5 pt-12">
          <div className="space-y-2">
             <span className="font-outfit text-[9px] uppercase tracking-[0.5em] text-white/20 block font-medium">Session Protocol</span>
             <p className="font-serif italic text-sm text-white/40 max-w-xs">High-fidelity documentation of the orchestration process and strategic validation sprints.</p>
          </div>
          <span className="font-outfit text-[8px] uppercase tracking-[1em] text-white/10 hidden sm:block">Archive // 2026-X</span>
        </div>
      </div>
    </section>
  )
}
