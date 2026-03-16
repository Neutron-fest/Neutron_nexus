'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
    {
        title: "Project Alpha",
        category: "Fintech // 01",
        description: "A decentralized liquidity protocol for emerging markets. Built for high-frequency low-latency execution.",
        tags: ["Solidity", "Next.js", "Rust"]
    },
    {
        title: "Neural Core",
        category: "AI & ML // 02",
        description: "Distributed compute orchestration for small-scale LLM fine-tuning. Optimized for edge device integration.",
        tags: ["Python", "PyTorch", "gRPC"]
    },
    {
        title: "Sentinel",
        category: "Cybersecurity // 03",
        description: "Zero-knowledge proofs for identity verification on public ledger systems. Privacy by architecture.",
        tags: ["Wasm", "Go", "ZK-SNARKs"]
    }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col border border-white/5 bg-white/[0.01] overflow-hidden rounded-sm"
        >
            <div className="aspect-[16/9] w-full bg-[#111] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="w-[80%] h-[1px] bg-white rotate-[35deg]" />
                    <div className="w-[80%] h-[1px] bg-white rotate-[-35deg]" />
                </div>
                <div className="absolute top-6 right-6">
                    <button className="h-10 w-10 rounded-full border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
                        <ExternalLink size={16} />
                    </button>
                </div>
            </div>

            <div className="p-10 flex flex-col flex-1 gap-6">
                <div className="space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">{project.category}</span>
                    <h3 className="font-orbitron font-extrabold text-2xl tracking-tight text-white uppercase italic">{project.title}</h3>
                    <p className="text-[13px] leading-relaxed text-white/40 font-light">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30 border border-white/10 px-2 py-1 rounded-full whitespace-nowrap">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function ProjectShowcase() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section
            ref={containerRef}
            id="grid"
            className="relative min-h-screen w-full bg-[#0a0a0a] py-32 px-6 lg:px-20 overflow-hidden"
        >
            {/* Background Subtle Label */}
            <div className="absolute inset-0 z-0 opacity-10 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ x }}
                    className="absolute -top-10 left-0 text-[25vw] font-black text-white/[0.02] font-orbitron italic select-none whitespace-nowrap"
                >
                    SHOWCASE // GRID
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6"
                        >
                            <div className="h-px w-16 bg-white/40" />
                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.6em] font-bold">Project Repository</span>
                        </motion.div>

                        <h2 className="font-orbitron font-black text-5xl lg:text-7xl leading-none text-white uppercase italic tracking-tighter">
                            Active <br />
                            <span className="text-white/20">Ventures.</span>
                        </h2>
                    </div>

                    <div className="max-w-md border-l border-white/5 pl-10 hidden lg:block">
                        <p className="text-sm text-white/40 leading-relaxed font-light">
                            Exploration of high-potential ventures being developed at Nexus. Each project represents a unique hypothesis being tested on the innovation floor.
                        </p>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="flex flex-col items-center justify-center pt-20">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-6 cursor-pointer group"
                    >
                        <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-white/30">View Repository</span>
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/40 transition-all duration-500">
                            <ArrowUpRight size={24} />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Grid Overlay Detail */}
            <div className="absolute bottom-0 right-0 p-10 opacity-10 pointer-events-none">
                <div className="h-[200px] w-px bg-gradient-to-t from-white to-transparent" />
            </div>
        </section>
    )
}
