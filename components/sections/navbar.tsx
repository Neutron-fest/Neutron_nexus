'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import gsap from 'gsap'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

const navLinks = [
  { label: 'Vision', href: '#vision' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Panel', href: '#panel' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Portfolio', href: '#grid' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 50)
  })

  useEffect(() => {
    if (!logoRef.current) return
    gsap.fromTo(logoRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-2xl border-b border-white/6 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between gap-6">
        <a
          ref={logoRef}
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex flex-col shrink-0 group opacity-0"
        >
          <span className="font-outfit font-black text-[13px] text-white tracking-[0.25em] uppercase leading-none">
            Neutron Nexus
          </span>
          <span className="font-serif text-[9px] italic text-white/30 tracking-widest mt-1">
            Innovation Day 2026
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <motion.button
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleNav(link.href)}
                className="font-outfit text-[11px] tracking-[0.25em] uppercase text-white/40 hover:text-white/90 transition-colors duration-300 underline-expand"
              >
                {link.label}
              </motion.button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            onClick={() => window.open(SUBMISSION_URL, '_blank')}
            className="relative font-outfit text-[10px] px-7 py-2.5 border border-white/15 text-white/70 bg-black hover:text-[#080808] hover:bg-white hover:border-white transition-all duration-500 uppercase tracking-[0.25em] font-semibold overflow-hidden group"
          >
            <span className="relative z-10">Register Now</span>
          </motion.button>

          <div className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/80" />
            </span>
            <span className="font-outfit text-[9px] tracking-[0.2em] uppercase text-white/30">Live</span>
          </div>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white/60 transition-all duration-400 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-px bg-white/60 transition-all duration-400 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-px bg-white/60 transition-all duration-400 ${menuOpen ? '-rotate-45 -translate-y-[11px]' : ''}`} />
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden bg-black/98 backdrop-blur-2xl border-t border-white/5"
      >
        <ul className="flex flex-col px-8 py-10 gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-outfit text-[13px] tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors duration-300 w-full text-left"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-6 border-t border-white/5">
            <button
              onClick={() => { setMenuOpen(false); window.open(SUBMISSION_URL, '_blank') }}
              className="font-outfit text-[10px] px-8 py-3.5 border border-white/15 text-white hover:bg-white hover:text-[#080808] transition-all duration-500 w-full text-center uppercase tracking-[0.3em] font-bold"
            >
              Register Now
            </button>
          </li>
        </ul>
      </motion.div>
    </header>
  )
}
