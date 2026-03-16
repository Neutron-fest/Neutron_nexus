'use client'

import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import EventHighlights from '@/components/sections/event-highlights'
import MentorsJudges from '@/components/sections/mentors-judges'
import EventSchedule from '@/components/sections/event-schedule'
import ProjectShowcase from '@/components/sections/project-showcase'
import CampusHero from '@/components/sections/campus-hero'
import FestSlider from '@/components/sections/fest-slider'
import VideoEvents from '@/components/sections/video-events'
import FestivalCelebration from '@/components/sections/festival-celebration'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <EventHighlights />
      <MentorsJudges />
      <EventSchedule />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
