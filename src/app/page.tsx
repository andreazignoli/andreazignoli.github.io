import { Hero } from '@/components/sections/hero'
import { WhatIDo } from '@/components/sections/what-i-do'
import { HowIWork } from '@/components/sections/how-i-work'
import { Background } from '@/components/sections/background'
import { Research } from '@/components/sections/research'
import { WorkTogether } from '@/components/sections/work-together'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <HowIWork />
      <Background />
      <Research />
      <WorkTogether />
    </main>
  )
}
