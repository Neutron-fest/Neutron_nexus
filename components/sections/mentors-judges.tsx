'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'

const panel = [
    {
        name: "Dr. Elena Sterling",
        role: "Venture Partner",
        company: "Nexus Capital",
        bio: "Specializing in early-stage orchestration and market pivots.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
        name: "Marcus Vane",
        role: "Chief Architect",
        company: "Core Systems",
        bio: "Expert in distributed ledger logic and high-fidelity prototypes.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
        name: "Sarah Jenkins",
        role: "Strategic Analyst",
        company: "Global Nodes",
        bio: "Focusing on institutional scalability and cross-border integration.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
        name: "Julian Thorne",
        role: "Foundry Lead",
        company: "Innovation Labs",
        bio: "Driving the translation of raw concepts into commercial outputs.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&auto=format&fit=crop"
    }
]

const PanelMember = ({ member, index }: { member: typeof panel[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-sm overflow-hidden"
    >
        <div className="aspect-square w-full relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
            <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

            {/* Social Overlays */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <button className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/40 hover:text-white transition-colors">
                    <Linkedin size={14} />
                </button>
                <button className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/40 hover:text-white transition-colors">
                    <Twitter size={14} />
                </button>
            </div>
        </div>

        <div className="p-8 space-y-4">
            <div className="space-y-1">
                <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/20">{member.company}</span>
                <h3 className="font-orbitron text-lg font-black text-white uppercase italic tracking-tight">{member.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{member.role}</p>
            </div>
            <p className="text-[12px] leading-relaxed text-white/30 font-light border-t border-white/5 pt-4">
                {member.bio}
            </p>
        </div>
    </motion.div>
)

export default function MentorsJudges() {
    return (
        <section
            id="panel"
            className="relative min-h-screen w-full bg-[#0a0a0a] py-32 px-6 lg:px-20 overflow-hidden"
        >
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                    <div className="lg:col-span-12 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6"
                        >
                            <div className="h-px w-16 bg-white/40" />
                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.6em] font-bold">The Advisory Panel</span>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                            <h2 className="font-orbitron font-black text-5xl lg:text-7xl leading-none text-white uppercase italic tracking-tighter">
                                Mentors & <br />
                                <span className="text-white/20">Judges.</span>
                            </h2>
                            <div className="max-w-md border-l border-white/5 pl-12 hidden lg:block">
                                <p className="text-sm text-white/40 leading-relaxed font-light">
                                    A high-fidelity circle of operators and visionaries responsible for evaluating innovation potential and providing critical venture feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {panel.map((member, index) => (
                        <PanelMember key={index} member={member} index={index} />
                    ))}
                </div>

                {/* Global Network Note */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center">
                    <span className="font-mono text-[9px] uppercase tracking-[0.8em] text-white/10 font-black">Institutional Integrity // Verified Experts</span>
                </div>
            </div>

            {/* Decorative vertical lines */}
            <div className="absolute top-0 left-10 w-px h-full bg-white/[0.01] hidden lg:block" />
            <div className="absolute top-0 right-10 w-px h-full bg-white/[0.01] hidden lg:block" />
        </section>
    )
}
