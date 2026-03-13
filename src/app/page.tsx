import { Hero } from '@/components/sections/hero'
import { WhatIDo } from '@/components/sections/what-i-do'
import { HowIWork } from '@/components/sections/how-i-work'
import { Background } from '@/components/sections/background'
import { FeaturedPublications } from '@/components/sections/featured-publications'
import { FeaturedTalks } from '@/components/sections/featured-talks'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <HowIWork />
      <Background />
      <FeaturedPublications />
      <FeaturedTalks />
    </main>
  )
}
