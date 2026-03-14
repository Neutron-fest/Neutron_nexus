'use client'

import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import EventComponents from '@/components/sections/event-components'
import Footer from '@/components/sections/footer'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="w-full overflow-x-hidden bg-[#0a0a0f]">
      {/* <Navbar onSubmit={() => router.push('/submit')} /> */}
      <Hero />
      <About />
      <div id="events">
        <EventComponents />
      </div>
      <Footer />
    </main>
  )
}
