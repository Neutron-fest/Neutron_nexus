'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const images = [
    '/images/campus-life/student_lab_work_1773653580814.png',
    '/images/campus-life/student_presentation_1773653603293.png',
    '/images/campus-life/student_collaboration_1773653674688.png',
    '/images/campus-life/student_workshop_1773653700955.png',
    '/images/campus-life/student_sports_1773653780388.png',
]

export default function CampusHero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] pt-32 pb-20 px-6">
            {/* Background ambient glow - White/Grey monochrome */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />

            <div className="relative z-10 mx-auto w-full max-w-5xl text-center space-y-8">
                {/* Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/30"
                >
                    <span>Home</span>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-white/60">Student Life</span>
                </motion.div>

                {/* Accent Title - Monochrome */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-white/40"
                >
                    Campus Life of NST Students
                </motion.h3>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white !leading-[1.1]"
                >
                    Empowering. Innovative.<br className="hidden md:block" /> Fun-filled
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mx-auto max-w-2xl text-base md:text-lg text-white/40 leading-relaxed font-light"
                >
                    Our pedagogy revolutionise tech education and ignite your curiosity,
                    cultivating a growth mindset every day, while ensuring you have
                    the best 4 years of your life.
                </motion.p>

                {/* CTA Button - Monochrome Black/White */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button className="group relative overflow-hidden rounded-full bg-white px-10 py-4 transition-all hover:bg-white/90 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        <span className="relative z-10 text-sm font-black tracking-[0.1em] text-black uppercase">Apply Now</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                    </button>
                </motion.div>
            </div>

            {/* Image Gallery */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-20 w-full"
            >
                <div className="flex gap-6 overflow-x-auto pb-12 px-4 [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center justify-start md:justify-center">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -12, scale: 1.05 }}
                            className="relative aspect-[4/5] h-[300px] md:h-[360px] flex-shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 grayscale hover:grayscale-0"
                        >
                            <Image
                                src={img}
                                alt={`Campus Life ${idx + 1}`}
                                fill
                                sizes="(max-width: 768px) 300px, 360px"
                                className="object-cover transition-transform duration-1000 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </section>
    )
}
