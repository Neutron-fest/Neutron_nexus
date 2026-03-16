'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Users, Trophy, Rocket, Globe, Shield } from 'lucide-react'

const highlights = [
    {
        icon: Rocket,
        title: "10K Prize Pool",
        description: "Substantial capital injections for top-performing ventures.",
        label: "Incentive"
    },
    {
        icon: Users,
        title: "Expert Mentorship",
        description: "Direct interaction with industry leaders and successful operators.",
        label: "Network"
    },
    {
        icon: Zap,
        title: "12-Hour Sprint",
        description: "High-intensity building environment for rapid prototyping.",
        label: "Execution"
    },
    {
        icon: Trophy,
        title: "Venture Ready",
        description: "Every outcome is designed for immediate commercial scalability.",
        label: "Standard"
    },
    {
        icon: Shield,
        title: "IP Security",
        description: "Rigorous standards for protecting founder vision and logic.",
        label: "Protocol"
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Integration into world-wide innovation networks and nodes.",
        label: "Scale"
    }
]

export default function EventHighlights() {
    return (
        <section
            id="highlights"
            className="relative min-h-screen w-full bg-[#0a0a0a] py-32 px-6 lg:px-20 overflow-hidden"
        >
            {/* Background Decorative */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <div className="h-px w-8 bg-white/20" />
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.8em] font-bold">Key Advantages</span>
                        <div className="h-px w-8 bg-white/20" />
                    </motion.div>

                    <h2 className="font-orbitron font-black text-5xl lg:text-7xl leading-none text-white uppercase italic tracking-tighter">
                        Assembly <br />
                        <span className="text-white/20">Highlights.</span>
                    </h2>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
                        >
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="h-12 w-12 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                        <item.icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">{item.label}</span>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-orbitron text-xl font-extrabold text-white uppercase italic tracking-tight">{item.title}</h3>
                                    <p className="text-[13px] leading-relaxed text-white/40 font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute bottom-4 right-4 w-px h-8 bg-white/20" />
                                <div className="absolute bottom-4 right-4 w-8 h-px bg-white/20" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Hint */}
                <div className="mt-32 border-t border-white/5 pt-12 flex flex-col items-center gap-6 opacity-20">
                    <span className="font-mono text-[9px] text-white uppercase tracking-[0.5em] font-black">Innovation Assembly // Operational Standards</span>
                </div>
            </div>
        </section>
    )
}
