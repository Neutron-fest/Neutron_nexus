'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'

const videos = [
    {
        id: 'ru-ganesh',
        url: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a72160483aa24733af7f3686daae3386.mp4',
        thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dd31dfb763a32666114de_festiavls%20video%201.avif',
        campus: 'Rishihood University'
    },
    {
        id: 'adypu-ganesh-1',
        url: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/97c58908783e4fffbc3137743fef52a7.mp4',
        thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dd38ff408294b9a214317_festival%20video%20middle%20thumbnail.avif',
        campus: 'Ajeenkya DY Patil University'
    },
    {
        id: 'adypu-ganesh-2',
        url: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/54ce1fcc0f5249169450f5c47e8c713b.mp4',
        thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6830512cfd46a7643fabf3c7_ru%20ganesh.avif',
        campus: 'Ajeenkya DY Patil University'
    }
]

export default function FestivalCelebration() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })

    return (
        <section className="bg-background py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <div className="space-y-6 max-w-2xl">
                        <div className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30">Festival Celebration</div>
                        <h2 className="font-orbitron text-5xl md:text-7xl font-bold text-white tracking-tighter">Ganesh Chaturthi</h2>
                        <p className="text-xl text-white/40 font-light leading-relaxed">Welcoming Bappa with joy, music, and unforgettable memories across our campuses.</p>
                    </div>
                </div>

                <div className="overflow-hidden mb-32" ref={emblaRef}>
                    <div className="flex gap-6">
                        {videos.map((v) => (
                            <motion.div
                                key={v.id}
                                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] min-w-0"
                            >
                                <div className="group relative aspect-4/5 rounded-[40px] overflow-hidden border border-white/10 bg-white/2">
                                    <Image
                                        src={v.thumbnail}
                                        alt={v.campus}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all" />

                                    <button
                                        onClick={() => setActiveVideo(v.url)}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110">
                                            <Play className="w-8 h-8 fill-current translate-x-1" />
                                        </div>
                                    </button>

                                    <div className="absolute top-10 right-10 flex flex-col items-end">
                                        <div className="px-5 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                                            {v.campus}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="relative w-full overflow-hidden py-10 border-y border-white/5 bg-white/2">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="shrink-0 px-4">
                            <div className="relative h-48 md:h-64 aspect-12/4 rounded-2xl overflow-hidden grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition-all duration-700">
                                <Image
                                    src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/682dd4554d93a7df69000477_0ec47676c10e4674f84a8bbea65406db_festivals%20student%20images.avif"
                                    alt="Students creating rangoli"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
                <DialogPortal>
                    <DialogOverlay className="fixed inset-0 z-100 bg-black/98 backdrop-blur-2xl" />
                    <DialogContent className="fixed left-1/2 top-1/2 z-101 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 p-6">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-16 right-6 p-3 rounded-full border border-white/10 text-white/40 hover:text-white transition-all"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                            {activeVideo && <video src={activeVideo} autoPlay controls className="w-full h-full" />}
                        </div>
                    </DialogContent>
                </DialogPortal>
            </Dialog>

        </section>
    )
}
