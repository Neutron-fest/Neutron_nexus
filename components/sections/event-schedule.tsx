'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'

const schedule = [
    {
        time: "08:00 AM",
        title: "Opening Keynote",
        description: "Executive vision and inauguration of the 2026 Innovation Assembly.",
        location: "Main Auditorium"
    },
    {
        time: "10:30 AM",
        title: "The Foundry Floor",
        description: "Intensive building session. Founders moving from logic to prototype.",
        location: "Innovation Wing"
    },
    {
        time: "01:00 PM",
        title: "Executive Luncheon",
        description: "Curated networking for founders, mentors, and industry operators.",
        location: "Sky Lounge"
    },
    {
        time: "02:30 PM",
        title: "Strategic Pivots",
        description: "Mid-day evaluation and mentor feedback loops.",
        location: "Strategy Room B"
    },
    {
        time: "06:00 PM",
        title: "The Final Pitch",
        description: "High-stakes presentation of market-ready prototypes to industry titans.",
        location: "Main Auditorium"
    },
    {
        time: "08:30 PM",
        title: "Award Ceremony",
        description: "Recognition of top-tier ventures and closing ceremony.",
        location: "Grand Ballroom"
    }
]

export default function EventSchedule() {
    return (
        <section
            id="schedule"
            className="relative min-h-screen w-full bg-[#0a0a0a] py-32 px-6 lg:px-20"
        >
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6"
                    >
                        <div className="h-px w-16 bg-white/40" />
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.6em] font-bold">Assembly Timeline</span>
                    </motion.div>

                    <h2 className="font-orbitron font-black text-5xl lg:text-7xl leading-none text-white uppercase italic tracking-tighter">
                        Operational <br />
                        <span className="text-white/20">Schedule.</span>
                    </h2>
                </div>

                {/* Schedule List */}
                <div className="flex flex-col gap-1">
                    {schedule.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] items-center gap-10 py-10 border-t border-white/5 hover:bg-white/[0.02] transition-colors duration-500 px-6"
                        >
                            {/* Time */}
                            <div className="flex items-center gap-4">
                                <Clock size={16} className="text-white/20 group-hover:text-white transition-colors" />
                                <span className="font-orbitron text-xl font-bold text-white tracking-tight">{item.time}</span>
                            </div>

                            {/* Title & Description */}
                            <div className="space-y-2">
                                <h3 className="font-orbitron text-xl font-extrabold text-white uppercase italic group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                                <p className="text-sm text-white/40 font-light leading-relaxed max-w-xl">
                                    {item.description}
                                </p>
                            </div>

                            {/* Location */}
                            <div className="flex items-center justify-end gap-3 text-right">
                                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">{item.location}</span>
                                <MapPin size={14} className="text-white/10" />
                            </div>

                            {/* Side Accent */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-white group-hover:h-1/2 transition-all duration-500" />
                        </motion.div>
                    ))}
                    <div className="border-t border-white/5" />
                </div>

                {/* Status Line */}
                <div className="mt-20 flex justify-between items-center opacity-30">
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-12 h-px bg-white" />)}
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.8em]">End of Assembly // Day 01</span>
                </div>
            </div>
        </section>
    )
}
