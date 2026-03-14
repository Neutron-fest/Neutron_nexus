'use client'

import { useEffect, useRef } from 'react'
import { Rocket, Cpu, Code, Lightbulb, MessageSquare, Trophy, Gamepad2, Users, ChevronRight } from 'lucide-react'
import gsap from 'gsap'

interface EventCard {
  icon: any
  title: string
  description: string
  tag: string
  status: string
  load: number
}

const eventCards: EventCard[] = [
  {
    icon: Rocket,
    tag: 'TRK_01',
    title: 'Startup Foundry',
    status: 'ACTIVE_STAGE',
    load: 92,
    description: '44 student startups evaluated by industry mentors and showcased to investors.',
  },
  {
    icon: Code,
    tag: 'TRK_02',
    title: 'Software Showcase',
    status: 'COMPILNG...',
    load: 64,
    description: 'Live demo stations for apps, AI tools, and platforms built by students.',
  },
  {
    icon: Cpu,
    tag: 'TRK_03',
    title: 'Hardware Lab',
    status: 'INTERFACING',
    load: 45,
    description: 'IoT devices, robotics, and embedded systems pushing boundaries.',
  },
  {
    icon: Lightbulb,
    tag: 'TRK_04',
    title: 'Idea Pitching',
    status: 'SYNCING',
    load: 78,
    description: 'Present startup ideas and research concepts to a community of innovators.',
  },
  {
    icon: MessageSquare,
    tag: 'TRK_05',
    title: 'Open Forums',
    status: 'BROADCASTING',
    load: 32,
    description: 'Peer exchange and open conversations about the future of tech.',
  },
  {
    icon: Trophy,
    tag: 'TRK_06',
    title: 'Competitions',
    status: 'PENDING_INIT',
    load: 12,
    description: 'Engaging activities and competitions for all participating students.',
  },
  {
    icon: Gamepad2,
    tag: 'TRK_07',
    title: 'Arena X',
    status: 'OPERATIONAL',
    load: 88,
    description: 'Engagement activities, games, and entertainment throughout the day.',
  },
  {
    icon: Users,
    tag: 'TRK_08',
    title: 'Nexus Lounge',
    status: 'LIVE_BUFF',
    load: 100,
    description: 'Industry mentors, informal networking, and complimentary food & drinks.',
  },
]

export default function EventComponents() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.event-card',
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: {
            each: 0.1,
            grid: 'auto'
          },
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%'
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="events" className="relative w-full py-32 px-6 bg-[#030308] overflow-hidden">
      {/* ── INTERFACE DECORATION ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-cyan-500">
              <span className="text-[10px] font-black tracking-[0.6em] uppercase">Architecture // v2.06</span>
            </div>
            <h2 className="font-orbitron text-5xl lg:text-6xl font-black text-white leading-tight">
              THE NEXUS <span className="text-white/20">GRID</span>
            </h2>
          </div>
          <p className="max-w-md font-ibm-plex text-neutral-500 text-sm leading-relaxed border-l border-white/10 pl-8">
            Each track is a dedicated node in the innovation ecosystem, engineered for maximum impact and cross-disciplinary collision.
          </p>
        </div>

        {/* ── THE INTERFACE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {eventCards.map((card, index) => (
            <div
              key={index}
              className="event-card group relative aspect-[4/5] p-6 bg-white/[0.01] border border-white/[0.05] hover:border-cyan-400/40 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Background ID */}
              <div className="absolute -bottom-4 -right-2 text-8xl font-black text-white/[0.02] group-hover:text-cyan-400/[0.05] transition-colors select-none">
                {card.tag.split('_')[1]}
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-cyan-400/40 transition-all group-hover:scale-110">
                    <card.icon className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] font-black text-cyan-400/60 tracking-widest">{card.tag}</span>
                    <span className="block text-[8px] font-mono text-white/20 uppercase font-bold">{card.status}</span>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <h3 className="font-orbitron text-lg font-black text-white group-hover:text-cyan-400 transition-colors uppercase leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-ibm-plex line-clamp-3 group-hover:text-neutral-400 transition-colors">
                    {card.description}
                  </p>

                  {/* Load Bar */}
                  <div className="space-y-1 pt-4">
                    <div className="flex justify-between text-[7px] font-black text-white/30 tracking-widest uppercase">
                      <span>Node_Load</span>
                      <span>{card.load}%</span>
                    </div>
                    <div className="w-full h-[2px] bg-white/5">
                      <div
                        className="h-full bg-cyan-400 transition-all duration-1000"
                        style={{ width: `${card.load}%` }}
                      />
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-[9px] font-black text-cyan-400 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    EXPLORE NODE <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/0 group-hover:border-cyan-400/20 transition-all" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white/0 group-hover:border-cyan-400/20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
