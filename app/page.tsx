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
import Image from 'next/image'

const SUBMISSION_URL = 'https://jasper-crest-d0c.notion.site/32305ae3df3380508209ec1f3b1511a1'
const LOGO_URL = 'https://ik.imagekit.io/yatharth/nexus.png'

const navLinks = [
  { label: 'About Us', ariaLabel: 'Go to About Us', link: '#vision' },
  { label: 'Road Map', ariaLabel: 'Go to Schedule', link: '#journey' },
  { label: 'Judges', ariaLabel: 'Go to Judges', link: '#panel' },
  { label: 'Media', ariaLabel: 'Go to Media', link: '#sessions' },
  { label: 'Contact', ariaLabel: 'Go to Contact', link: '#contact' },
]

export default function Home() {
  return (
    <main className="w-full bg-black">
      <div className="grain-overlay" aria-hidden="true" />
      <StaggeredMenu
        items={navLinks}
        logoContent={
          <div className="relative w-32 h-10 transition-transform duration-500 group-hover:scale-105 active:scale-95">
            <Image
              src={LOGO_URL}
              alt="Nexus Logo"
              fill
              className="object-contain"
              priority
            />
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
      {/* <EventSchedule /> */}
      <InTheRoom />
      <Contact />
      <Footer />
    </main>
  )
}
