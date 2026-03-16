'use client'

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'

const fests = [
    {
        id: 'neutron',
        logo: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6944e16af9ca98b694377e44_neutron-logo.png',
        subtitle: 'Neutron | Rishihood University',
        title: "India's first Techno-cultural fest",
        description: "Where innovation meets celebration — experience the vibrant spirit of NEUTRON",
        thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6944e36790fc1d8b6700ccab_vidoe-thumbnail.avif',
        videoUrl: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/1a080d4011e64162b01d8bedbc6c3ec5.mp4',
    },
    {
        id: 'tekron',
        logo: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6944e16ae8577e5b01bb7fa3_tekron-logo.png',
        subtitle: 'Tekron | ADY Patil University',
        title: "India's Most Futuristic Fest",
        description: "Launched in 2025, Tekron — NST-ADYPU’s first techno-cultural fest — set new benchmarks with its massive energy and participation.",
        thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6944e365550a366aad81035f_tekron-video-thumbnaol.avif',
        videoUrl: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/507405942fc8404b81f9c70a6e3d25d8.mp4',
    }
]

export default function FestSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', dragFree: true })
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <section className="relative w-full bg-background py-32 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] blur-[160px] rounded-full" />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {fests.map((fest) => (
                            <div key={fest.id} className="relative flex-[0_0_100%] min-w-0 px-4">
                                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-12 lg:gap-24 items-center bg-white/[0.01] border border-white/5 rounded-[40px] p-8 lg:p-20 backdrop-blur-3xl shadow-2xl relative overflow-hidden group/card">

                                    {/* Subtle inner glow */}
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/[0.02] blur-[80px] rounded-full pointer-events-none" />

                                    {/* Content Side */}
                                    <div className="flex flex-col space-y-12">
                                        <div className="space-y-8">
                                            <div className="flex items-center gap-6">
                                                <div className="w-20 h-20 relative grayscale group-hover/card:grayscale-0 transition-all duration-700 ease-out">
                                                    <Image
                                                        src={fest.logo}
                                                        alt={fest.id}
                                                        fill
                                                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                                    />
                                                </div>
                                                <div className="h-12 w-px bg-white/10 hidden md:block" />
                                                <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[11px] font-black uppercase tracking-[0.3em] text-white/50 whitespace-nowrap">
                                                    {fest.subtitle}
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <h3 className="font-orbitron text-5xl lg:text-7xl font-bold text-white leading-[1] tracking-tight">
                                                    {fest.title.split(' ').map((word, i) => (
                                                        <span key={i} className={i >= 3 ? "text-white/20" : ""}>
                                                            {word}{' '}
                                                        </span>
                                                    ))}
                                                </h3>
                                                <p className="max-w-md text-xl text-white/40 font-light leading-relaxed tracking-wide">
                                                    {fest.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Navigation Buttons */}
                                        <div className="flex gap-6 items-center">
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={scrollPrev}
                                                    className="p-5 rounded-full border border-white/5 bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-90"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={scrollNext}
                                                    className="p-5 rounded-full border border-white/5 bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-90"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent hidden md:block" />
                                        </div>
                                    </div>

                                    {/* Video Side */}
                                    <div className="relative aspect-video lg:aspect-[4/5] w-full rounded-3xl overflow-hidden group/video shadow-2xl border border-white/5">
                                        <Image
                                            src={fest.thumbnail}
                                            alt="Thumbnail"
                                            fill
                                            className="object-cover grayscale group-hover/video:grayscale-0 transition-all duration-1000 group-hover/video:scale-110 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-black/60 group-hover/video:bg-black/30 transition-all duration-500" />

                                        {/* Hover Overlay Text */}
                                        <div className="absolute top-10 left-10 overflow-hidden">
                                            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.8em] transform -translate-y-full group-hover/video:translate-y-0 transition-transform duration-500">
                                                View official highlights
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setActiveVideo(fest.videoUrl)}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-24 h-24 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 text-white shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover/video:bg-white group-hover/video:text-black transition-all duration-500"
                                            >
                                                <Play className="w-10 h-10 fill-current translate-x-1" />
                                            </motion.div>
                                        </button>

                                        <div className="absolute bottom-10 left-10 right-10">
                                            <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.5em] flex justify-between items-center group-hover/video:text-white/60 transition-colors">
                                                <span>Digital Archive 2024</span>
                                                <span>04:12</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
                <DialogPortal>
                    <DialogOverlay className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl animate-in fade-in duration-500" />
                    <DialogContent className="fixed left-1/2 top-1/2 z-[101] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 p-6 animate-in fade-in zoom-in-95 duration-500">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-16 right-6 lg:-right-16 lg:top-0 p-4 rounded-full border border-white/10 text-white/40 hover:text-white hover:scale-110 transition-all"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="aspect-video w-full rounded-[32px] overflow-hidden bg-black border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)]">
                            {activeVideo && (
                                <video
                                    src={activeVideo}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>
                    </DialogContent>
                </DialogPortal>
            </Dialog>
        </section>
    )
}
