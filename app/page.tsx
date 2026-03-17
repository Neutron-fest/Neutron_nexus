'use client'

import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import EventHighlights from '@/components/sections/event-highlights'
import InTheRoom from '@/components/sections/in-the-room'
import MentorsJudges from '@/components/sections/mentors-judges'
import EventSchedule from '@/components/sections/event-schedule'
import ProjectsHome from '@/components/sections/link-preview-section'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import { StaggeredMenu } from '@/components/StaggeredMenu'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'

const navLinks = [
  { label: 'Vision', ariaLabel: 'Go to Vision', link: '#vision' },
  { label: 'Projects', ariaLabel: 'Go to Projects', link: '#projects' },
  { label: 'Panel', ariaLabel: 'Go to Panel', link: '#panel' },
  { label: 'Schedule', ariaLabel: 'Go to Schedule', link: '#schedule' },
  { label: 'Experience', ariaLabel: 'Go to Experience', link: '#sessions' },
  { label: 'Contact', ariaLabel: 'Go to Contact', link: '#contact' },
]

export default function Home() {
  return (
    <main className="w-full bg-black">
      <div className="grain-overlay" aria-hidden="true" />
      <StaggeredMenu
        items={navLinks}
        logoContent={
          <div className="flex flex-col shrink-0 group">
            <span className="font-outfit font-black text-[13px] tracking-[0.25em] uppercase leading-none" style={{ color: 'rgba(210, 230, 255, 0.85)' }}>
              Neutron Nexus
            </span>
            <span className="font-serif text-[9px] italic tracking-widest mt-1" style={{ color: 'rgba(160, 200, 255, 0.35)' }}>
              Innovation Day 2026
            </span>
          </div>
        }
        headerCTA={
          <button
            onClick={() => window.open(SUBMISSION_URL, '_blank')}
            className="font-outfit text-[10px] px-7 py-2.5 border border-sky-400/20 text-white bg-black hover:text-[#080808] hover:bg-sky-100 hover:border-sky-100 transition-all duration-500 uppercase tracking-[0.25em] font-semibold"
          >
            Register Now
          </button>
        }
      />
      <Hero />
      <About />
      {/* <EventHighlights /> */}
      {/* <ProjectsHome /> */}
      <MentorsJudges />
      <EventSchedule />
      <InTheRoom />
      <Contact />
      <Footer />
    </main>
  )
}
