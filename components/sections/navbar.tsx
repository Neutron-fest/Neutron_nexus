'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface NavbarProps {
    onSubmit?: () => void
}

const navLinks = [
    { label: 'Vision', href: '#about' },
    { label: 'The Grid', href: '#events' },
]

export default function Navbar({ onSubmit }: NavbarProps) {
    const router = useRouter()
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
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${scrolled
                ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06]'
                : 'bg-[#0a0a0f]/60 backdrop-blur-md border-b border-white/[0.04]'
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">

                {/* Logo — mirrors the reference image style */}
                <a
                    href="#hero"
                    onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
                    className="flex items-center gap-2.5 shrink-0 group"
                >
                    {/* Icon mark */}
                    <div className="w-7 h-7 rounded-lg border border-white/15 bg-white/[0.04] flex items-center justify-center group-hover:border-cyan-400/40 transition-all duration-200">
                        <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="2.5" fill="currentColor" />
                            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-orbitron text-[10px] font-bold text-white leading-none tracking-wider">Neutron Nexus</p>
                        <p className="font-ibm-plex text-[8px] text-neutral-600 leading-none mt-0.5 uppercase tracking-tighter">Innovation Day 2026</p>
                    </div>
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button
                                onClick={() => handleNav(link.href)}
                                className="font-ibm-plex text-[10px] tracking-[0.3em] uppercase text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right cluster */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={onSubmit ?? (() => router.push('/submit'))}
                        className="font-ibm-plex text-[10px] px-4 py-1.5 rounded-md border border-white/[0.1] text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-200 uppercase tracking-widest"
                    >
                        Submit Project
                    </button>
                    {/* System live badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/[0.08] bg-white/[0.03]">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                        </span>
                        <span className="font-ibm-plex text-[10px] tracking-[0.18em] uppercase text-cyan-500/80 font-bold">LIVE</span>
                    </div>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-4 h-px bg-neutral-500 transition-all duration-250 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-4 h-px bg-neutral-500 transition-all duration-250 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-4 h-px bg-neutral-500 transition-all duration-250 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72 opacity-100 border-b border-white/[0.1]' : 'max-h-0 opacity-0'
                    } bg-[#0a0a0f]/95 backdrop-blur-xl`}
            >
                <ul className="flex flex-col px-6 py-5 gap-4">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button
                                onClick={() => handleNav(link.href)}
                                className="font-ibm-plex text-[11px] tracking-widest uppercase text-neutral-500 hover:text-white transition-colors duration-200 w-full text-left"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                    <li className="pt-2 border-t border-white/[0.05]">
                        <button
                            onClick={() => { setMenuOpen(false); (onSubmit ?? (() => router.push('/submit')))() }}
                            className="font-ibm-plex text-sm px-5 py-2.5 rounded-lg border border-white/10 text-neutral-300 hover:text-white hover:border-white/20 transition-all duration-200 w-full text-center"
                        >
                            Submit Project
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}
