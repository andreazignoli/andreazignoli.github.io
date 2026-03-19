import { Hero } from '@/components/sections/hero'
import { Background } from '@/components/sections/background'
import { WhatIDo } from '@/components/sections/what-i-do'
import { HowIWork } from '@/components/sections/how-i-work'
import { PersonalProjects } from '@/components/sections/personal-projects'
import { FeaturedPublications } from '@/components/sections/featured-publications'
import { FeaturedTalks } from '@/components/sections/featured-talks'
import { WorkTogether } from '@/components/sections/work-together'

export default function Home() {
  return (
    <main>
      <Hero />
      <Background />
      <WhatIDo />
      <HowIWork />
      <PersonalProjects />
      <FeaturedPublications />
      <FeaturedTalks />
      <WorkTogether />
    </main>
  )
}
