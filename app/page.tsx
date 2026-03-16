'use client'

import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import EventHighlights from '@/components/sections/event-highlights'
import InTheRoom from '@/components/sections/in-the-room'
import Partners from '@/components/sections/partners'
import MentorsJudges from '@/components/sections/mentors-judges'
import EventSchedule from '@/components/sections/event-schedule'
import ProjectShowcase from '@/components/sections/project-showcase'
import LinkPreviewSection from '@/components/sections/link-preview-section'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="w-full bg-black">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <Hero />
      <About />
      <LinkPreviewSection />
      <EventHighlights />
      <InTheRoom />
      <Partners />
      <MentorsJudges />
      <EventSchedule />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
