'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Phone } from 'lucide-react'

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative min-h-screen w-full bg-[#0a0a0a] py-32 px-6 lg:px-20 overflow-hidden"
        >
            {/* Background Decorative */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white rotate-12" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white -rotate-12" />
            </div>

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
                        <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.6em] font-bold">Assembly Inquiries</span>
                    </motion.div>

                    <h2 className="font-orbitron font-black text-5xl lg:text-7xl leading-none text-white uppercase italic tracking-tighter">
                        Executive <br />
                        <span className="text-white/20">Contact.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Institutional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-12"
                    >
                        <div className="space-y-6">
                            <p className="text-xl text-white/60 font-light leading-relaxed max-w-md">
                                Direct lines for institutional partnerships, venture inquiries, and assembly coordination.
                            </p>
                            <div className="h-px w-24 bg-white/10" />
                        </div>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-center group cursor-pointer">
                                <div className="h-12 w-12 rounded-sm border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                    <Mail size={18} />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">Institutional Email</p>
                                    <p className="font-orbitron text-sm font-bold text-white tracking-widest">hello@neutronnexus.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center group cursor-pointer">
                                <div className="h-12 w-12 rounded-sm border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                    <MapPin size={18} />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">Assembly HQ</p>
                                    <p className="font-orbitron text-sm font-bold text-white tracking-widest">Innovation District, Delhi NCR</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center group cursor-pointer">
                                <div className="h-12 w-12 rounded-sm border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                                    <Phone size={18} />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">Operator Pulse</p>
                                    <p className="font-orbitron text-sm font-bold text-white tracking-widest">+91 [OPERATOR_SYNC]</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Minimal Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-12 border border-white/5 bg-white/[0.01] rounded-sm"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-white/10 py-3 font-orbitron text-sm text-white focus:outline-none focus:border-white transition-colors"
                                        placeholder="ENTER_IDENTITY"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/10 py-3 font-orbitron text-sm text-white focus:outline-none focus:border-white transition-colors"
                                        placeholder="ENTER_COMM_SYNC"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">Inquiry Brief</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/10 py-3 font-orbitron text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"
                                    placeholder="DESCRIBE_OBJECTIVE"
                                />
                            </div>

                            <button className="group relative flex items-center justify-center gap-4 w-full py-5 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-500 rounded-sm">
                                <span className="font-orbitron text-[10px] font-black uppercase tracking-[0.3em]">Initialize Transmission</span>
                                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Status Hint */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center opacity-20">
                    <span className="font-mono text-[9px] uppercase tracking-[0.5em]">Global Communication Protocol Active // Secure Channel</span>
                </div>
            </div>
        </section>
    )
}
