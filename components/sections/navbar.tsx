'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

interface NavbarProps {
    onSubmit?: () => void
}

const navLinks = [
    { label: 'Vision', href: '#vision' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Panel', href: '#panel' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Portfolio', href: '#grid' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onSubmit }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href: string) => {
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.08] py-2'
                : 'bg-transparent border-b border-transparent py-4'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between gap-6">

                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className="flex items-center gap-3 shrink-0 group"
                >
                    <div className="w-8 h-8 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-white" />
                    </div>
                    <div>
                        <p className="font-orbitron text-[11px] font-black text-white leading-none tracking-[0.2em] uppercase">Neutron Nexus</p>
                        <p className="font-mono text-[8px] text-white/20 leading-none mt-1 uppercase tracking-widest font-bold">Innovation Assembly</p>
                    </div>
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-10 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button
                                onClick={() => handleNav(link.href)}
                                className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-all duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right cluster */}
                <div className="hidden md:flex items-center gap-6">
                    <button
                        onClick={onSubmit ?? (() => { window.location.href = SUBMISSION_URL })}
                        className="font-orbitron text-[9px] px-6 py-2 rounded-full border border-white/10 text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300 uppercase tracking-[0.25em] font-bold"
                    >
                        Submit Project
                    </button>
                    {/* System live badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02]">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/60 font-bold">LIVE</span>
                    </div>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : 'opacity-40'}`} />
                    <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-40'}`} />
                    <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : 'opacity-40'}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            <motion.div
                initial={false}
                animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
                className="md:hidden overflow-hidden bg-[#050505]/95 backdrop-blur-2xl"
            >
                <ul className="flex flex-col px-8 py-8 gap-6">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button
                                onClick={() => handleNav(link.href)}
                                className="font-mono text-[12px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-all duration-300 w-full text-left"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                    <li className="pt-4 border-t border-white/5">
                        <button
                            onClick={() => { setMenuOpen(false); (onSubmit ?? (() => { window.location.href = SUBMISSION_URL }))() }}
                            className="font-orbitron text-[10px] px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 w-full text-center uppercase tracking-widest font-black"
                        >
                            Submit Project
                        </button>
                    </li>
                </ul>
            </motion.div>
        </header>
    )
}
