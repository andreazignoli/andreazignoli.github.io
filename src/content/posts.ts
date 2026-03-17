import type { BlogPost } from '@/types'

export const posts: BlogPost[] = [
  {
    slug: 'down-the-poggio-milano-sanremo',
    title: 'Down the Poggio: bike handling at the Milano-Sanremo Classic',
    date: '2026-03-17',
    excerpt:
      'The descent from the Poggio is where Milano-Sanremo is won or lost. A look at what makes those 3.5 km so decisive — and what the science of bike handling and optimal trajectories can tell us about it.',
    hasContent: true,
  },
  {
    slug: 'workout-reserve-maximal-mean-power',
    title: 'A model that can evaluate the maximal mean power during exercise?',
    date: '2024-03-21',
    excerpt:
      "Spragg et al. 2023 aligns perfectly with the Athletica Workout Reserve concept — a real-time mechanical model that monitors how an athlete's maximal mean power shifts as fatigue accumulates.",
    hasContent: true,
  },
  {
    slug: 'eagles-sunflowers-cycling-trajectories',
    title: 'Of eagles, sunflowers, and cycling trajectories',
    date: '2023-11-23',
    excerpt:
      'What does a hunting eagle have in common with a sunflower? Both follow Fibonacci spiral patterns — and experienced cyclists may trace clothoids in their descending lines.',
    hasContent: true,
  },
  {
    slug: 'bike-handling-road-cycling',
    title: 'Notes on bike handling in road cycling',
    date: '2022-01-01',
    excerpt:
      'Bike handling is a fascinating and under-studied topic in road cycling. I define it as the ability to consciously explore large portions of the gg diagram — and it can be worth over a minute in a 5-km technical section.',
    hasContent: true,
  },
  {
    slug: 'ai-cpet-data',
    title: 'AI applied to cardiopulmonary exercise test data',
    date: '2022-03-03',
    excerpt:
      'Most AI algorithms for CPET data never reach clinical practice. What is the AI chasm, and how do interpretability, transparency, and cognitive load shape whether a model survives contact with the real world?',
    hasContent: true,
  },
  {
    slug: 'risk-rewards-cycling-descents',
    title: 'Risk and rewards in road cycling fast descents',
    date: '2022-05-27',
    excerpt:
      'A data-driven analysis of the Verona ITT course comparing the 2019 and 2022 editions, exploring how racing lines and descending strategies affect time trial performance.',
    externalLink: 'https://rpubs.com/andrea_zignoli/verona_ITT_2019_vs_2022',
  },
  {
    slug: 'oxynet-collective-intelligence',
    title: 'Oxynet: A collective intelligence approach to cardiopulmonary test interpretation',
    date: '2021-05-27',
    excerpt:
      'How a crowd-sourced dataset of expert annotations combined with deep learning can automate and standardise CPET interpretation at scale — while tackling the AI chasm from a different angle.',
    hasContent: true,
  },
  {
    slug: 'ai-training-adaptation',
    title: 'The Greatest Show on Earth',
    date: '2020-03-22',
    excerpt:
      'How AI technologies might assist us to monitor and optimise the chronic physiological adaptations that occur with endurance training, and how AI models might enable more systematic, data-driven training design.',
    externalLink: 'https://hiitscience.com/the-greatest-show-on-earth/',
  },
  {
    slug: 'how-ai-is-not-changing-sport-science',
    title: 'How AI is (not) going to change sport science',
    date: '2019-01-11',
    excerpt:
      "We didn't need electric guitars to make better music — and we don't need AI to become better coaches. But we needed electric guitars to create new sounds. AI in sport science will be similar.",
    externalLink: 'https://hiitscience.com/how-ai-is-not-going-to-change-sport-science/',
  },
]
