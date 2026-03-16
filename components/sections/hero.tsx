'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#030303] flex flex-col items-center justify-center">
      
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen filter blur-[120px] bg-blue-600/40 pointer-events-none z-0"
      />
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-screen filter blur-[120px] bg-purple-600/30 pointer-events-none z-0"
      />
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full mix-blend-screen filter blur-[100px] bg-emerald-500/20 pointer-events-none z-0"
      />

      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.25] mix-blend-overlay">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="heroNoise">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.75" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroNoise)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-black/10 section-grain pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-outfit text-[#f0ede8] tracking-tight leading-[1.05] mb-6 font-medium"
        >
          <span>The Nexus of Ambition,</span> <br />
          <span className="font-serif italic font-light text-white/90">The Convergence of Vision</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12 max-w-2xl mx-auto flex flex-col items-center text-center"
        >
          <p className="text-[#f0ede8]/70 font-serif text-sm sm:text-base md:text-lg leading-relaxed italic max-w-xl">
            [1] "A formidable visionary is one who sees beyond the horizon, crafting the future regardless of whatever obstacles stand in the way."
          </p>
          <p className="text-[#f0ede8]/40 font-outfit text-[10px] sm:text-xs mt-6 uppercase tracking-[0.3em] block">
            — The Scale of Ambition
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#about" target='_blank'>
            <button className="mt-12 md:mt-16 px-8 py-3.5 bg-[#f0ede8] text-black font-outfit text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
              Explore Vision
            </button>
          </a>
          <a href='https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1' target='_blank'>
            <button className="mt-12 md:mt-16 ml-4 px-8 py-3.5 border border-[#f0ede8] text-white hover:text-black font-outfit text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
              Submit Project
            </button>
          </a>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#f0ede8]/30 pointer-events-none z-10"
      >
         <span className="text-[9px] tracking-[0.4em] uppercase mb-4 font-outfit block">Scroll</span>
         <motion.div 
           animate={{ height: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="w-[1px] h-12 bg-gradient-to-b from-[#f0ede8]/50 to-transparent" 
         />
      </motion.div>
    </section>
  );
}
