'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const videos = [
  { id: 1, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Architecture Session' },
  { id: 2, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Strategy Briefing' },
  { id: 3, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Development Sprint' },
  { id: 4, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Project Alignment' },
  { id: 5, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'System Design' },
  { id: 6, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Nexus Integration' },
  { id: 7, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Core Validation' },
  { id: 8, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Scale Planning' },
  { id: 9, src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', title: 'Executive Review' },
]

function VideoCard({ 
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

  useEffect(() => {
    if (isActive) {
      videoRef.current?.play().catch(() => {})
    } else {
      videoRef.current?.pause()
      if (videoRef.current) videoRef.current.currentTime = 0
    }
  }, [isActive])

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
      className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 cursor-none border border-white/5"
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
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
          {videos.map((v) => (
            <VideoCard
              key={v.id}
              src={v.src}
              title={v.title}
              isActive={activeId === v.id}
              isAnyActive={activeId !== null}
              onHoverStart={() => setActiveId(v.id)}
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
