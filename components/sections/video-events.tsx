'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X, Cpu, Palette } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'

const eventCategories = [
    {
        id: 'technical',
        title: 'Technical Events',
        description: 'From coding competitions to robotics challenges, explore the exciting range of technical events designed to challenge your skills and ignite your passion for innovation.',
        icon: <Cpu className="w-8 h-8 text-white/60" />,
        videos: [
            {
                id: 't1',
                url: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/f63d6dc13b0d461a8dc3e22bda2a1bbb.mp4',
                thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6831f6b0f233131a07c7769b_technical%20events%201%20thumbnail.avif',
                caption: 'Innovation Workshops'
            },
            {
                id: 't2',
                url: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c8ffd4c157834b83ba23d4596d009db4.mp4',
                thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6831f792f233131a07c7f2d9_technical%20event%202%20thumbnail.avif',
                caption: 'Prototypes & Pitches'
            }
        ]
    },
    {
        id: 'cultural',
        title: 'Cultural Events',
        description: 'Dive into the vibrant world of cultural events that celebrate creativity, talent, and tradition. From music and dance to art and drama.',
        icon: <Palette className="w-8 h-8 text-white/60" />,
        videos: [
            {
                id: 'c1',
                url: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d197a51751824f93ab2dc380d78dc717.mp4',
                thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6831f828757f3ca839347c22_cultural%20events%20video%201.avif',
                caption: 'Entertainment & Comedy'
            },
            {
                id: 'c2',
                url: 'https://d3dyfaf3iutrxo.cloudfront.net/general/upload/74423b4d5b404cc6bebf1f46c9c5c6aa.mp4',
                thumbnail: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6831f8ee06b9860f7bba5acc_mere%20bina%20video.avif',
                caption: 'Stage Performances'
            }
        ]
    }
]

export default function VideoEvents() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    return (
        <section className="bg-background py-32 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-32">
                    {eventCategories.map((category) => (
                        <div key={category.id} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

                            {/* Content Side */}
                            <div className="space-y-8 sticky top-32">
                                <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                                    {category.icon}
                                </div>
                                <div className="space-y-4">
                                    <h2 className="font-orbitron text-4xl font-bold text-white tracking-tight italic">
                                        {category.title}
                                    </h2>
                                    <p className="text-white/40 leading-relaxed font-light text-lg">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Videos Side */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.videos.map((video) => (
                                    <motion.div
                                        key={video.id}
                                        whileHover={{ y: -10 }}
                                        className="group relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] shadow-2xl"
                                    >
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.caption}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />

                                        <button
                                            onClick={() => setActiveVideo(video.url)}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110">
                                                <Play className="w-6 h-6 fill-current translate-x-1" />
                                            </div>
                                        </button>

                                        <div className="absolute bottom-6 left-6">
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 group-hover:text-white transition-colors">
                                                {video.caption}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
                <DialogPortal>
                    <DialogOverlay className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl" />
                    <DialogContent className="fixed left-1/2 top-1/2 z-[101] w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 p-6">
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
