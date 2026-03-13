import type { BlogPost } from '@/types'

export const posts: BlogPost[] = [
  {
    slug: 'workout-reserve-maximal-mean-power',
    title: 'A model that can evaluate the maximal mean power during exercise?',
    date: '2024-03-21',
    excerpt:
      'A look at Spragg et al. 2023 and how the Workout Reserve model can evaluate maximal mean power profiles in real time during exercise — a fundamentally different approach from static critical power models.',
    content: `In the last few days, a new-ish published paper ([Spragg et al. 2023](https://onlinelibrary.wiley.com/doi/full/10.1002/ejsc.12077)) caught my attention. The paper has been written by an esteemed research unit that includes eminent researchers in the field of endurance sports and power profiling in cycling.

The paper explores whether a model can evaluate the maximal mean power a cyclist can sustain **during** exercise — not just from a resting baseline, but dynamically, accounting for accumulated fatigue.

This is precisely the problem Workout Reserve was designed to address. Unlike static critical power models, which assume a fixed anaerobic capacity (W′), Workout Reserve uses a mechanical (not physiological) framework that tracks how capacity evolves in real time.

The key insight: W′ depletion models fail because they assume a fixed reservoir. Workout Reserve instead models a time-varying ceiling — the maximum power an athlete can currently sustain given their history of effort.

This has direct applications to race pacing, training prescription, and real-time fatigue monitoring on devices like Garmin.`,
  },
  {
    slug: 'eagles-sunflowers-cycling-trajectories',
    title: 'Of eagles, sunflowers, and cycling trajectories',
    date: '2023-11-23',
    excerpt:
      'What does a hunting eagle have in common with a sunflower? Both follow Fibonacci spiral patterns — and so do optimal cycling trajectories. A look at the mathematics of natural optimal paths.',
    content: `What does an eagle that hunts a prey have in common with a sunflower? Well, apparently, both the trajectory of the eagle and the disposition of the seeds of the sunflower share the same mathematical structure: a spiral following a Fibonacci pattern.

This observation led me to explore whether optimal cycling trajectories — specifically descending lines — exhibit similar mathematical properties. When we apply optimal control to find the fastest path through a corner, the resulting trajectory shares structural similarities with logarithmic spirals found throughout nature.

The connection is not merely aesthetic. It reflects a deeper truth: optimal paths in constrained systems tend toward elegant mathematical forms. Understanding this can help us build better models for race strategy and trajectory optimisation in cycling.`,
  },
  {
    slug: 'bike-handling-road-cycling',
    title: 'Notes on bike handling in road cycling',
    date: '2022-01-01',
    excerpt:
      'Bike handling is a fascinating and under-studied topic in road cycling research. There are at least two distinct points of view — mixing them up leads to confusion in both the scientific literature and practitioner discussions.',
    content: `I think that *bike handling* in road cycling is a challenging and fascinating research topic. Practitioners often talk about it, and there are interesting discussions on scientific papers and cycling blogs. However, I noticed that there can be at least two points of view, and mixing them up is not going to help.

**Point of view 1: Bike handling as a vehicle dynamics problem.** From this perspective, bike handling is about the physical interaction between rider, bicycle, and road surface. It involves tyre adherence, vehicle stability, and the limits of the friction ellipse. This is an engineering problem.

**Point of view 2: Bike handling as a skill acquisition problem.** From this perspective, bike handling is about the rider's motor learning and perceptual-motor skills. How does an expert cyclist read the road and modulate their inputs to maintain control? This is a sports science and motor learning problem.

Both perspectives are valid and complementary, but they operate at different levels of analysis and require different methodologies. Good research in this area needs to be explicit about which view it is taking.`,
  },
  {
    slug: 'ai-cpet-data',
    title: 'AI applied to cardiopulmonary exercise test data',
    date: '2022-03-03',
    excerpt:
      'The number of AI applications to CPET data has grown rapidly, but most never reach clinical practice. What is the AI chasm, and how do we bridge it in sports science?',
    externalLink: undefined,
    content: `The number of applications of AI to health care and health-related fields has been exponentially growing in the last decade. However, of all the algorithms developed, a minor fraction of them is actually implemented in the clinical practice. This gap is also known as the AI *chasm*.

AI *chasm* is what separates a technology available at a high readiness level (a lab prototype or proof-of-concept) from a technology which is deployed and in production.

In the context of CPET data, this chasm manifests in several ways:

- **Data heterogeneity**: Different labs use different equipment, protocols, and reporting formats. An algorithm trained on one dataset rarely transfers without re-training.
- **Interpretability**: Clinicians and exercise physiologists need to understand *why* an AI system made a recommendation, not just what it recommended.
- **Validation**: The standards for clinical validation are much stricter than for academic publication.

The [Oxynet project](https://oxynet.net) was built with these challenges in mind — using a collective intelligence approach where multiple models are aggregated, and where interpretability is built in from the start.`,
  },
  {
    slug: 'risk-rewards-cycling-descents',
    title: 'Risk and rewards in road cycling fast descents',
    date: '2022-05-27',
    excerpt:
      'A data-driven analysis of the Verona ITT course comparing the 2019 and 2022 editions, exploring how racing lines and descending strategies affect time trial performance.',
    externalLink: 'https://rpubs.com/andrea_zignoli/verona_ITT_2019_vs_2022',
    content: `This analysis was first published on [RPubs](https://rpubs.com/andrea_zignoli/verona_ITT_2019_vs_2022).

Descending in road cycling is one of the highest-risk activities in professional sport. Yet the relationship between risk-taking in descents and overall time trial performance is rarely quantified.

Using GPS and power data from the Verona ITT course, I compared performance between the 2019 and 2022 editions. Key findings:

- Riders who adopted more aggressive racing lines in the technical descents gained significant time advantages that were difficult to recover on the climbs.
- The optimal trajectory through hairpin corners closely follows the predictions of the adherence ellipse model.
- Power output management on the descent approaches has a measurable effect on the subsequent climb performance.`,
  },
  {
    slug: 'oxynet-collective-intelligence',
    title: 'Oxynet: A collective intelligence approach to cardiopulmonary test interpretation',
    date: '2021-05-27',
    excerpt:
      'How a crowd-sourced dataset of expert annotations combined with deep learning can automate and standardise the interpretation of CPET data at scale.',
    externalLink: 'https://www.linkedin.com/pulse/oxynet-collective-intelligence-approach-test-andrea-zignoli/?trackingId=4jrP2%2Fs1mkaZP6C%2Bim1cIQ%3D%3D',
    content: `This blog post was originally published on [LinkedIn](https://www.linkedin.com/pulse/oxynet-collective-intelligence-approach-test-andrea-zignoli/?trackingId=4jrP2%2Fs1mkaZP6C%2Bim1cIQ%3D%3D).

The interpretation of cardiopulmonary exercise tests (CPET) is notoriously subjective. Different experts, looking at the same data, often reach different conclusions about key thresholds like the ventilatory anaerobic threshold (VAT) and the respiratory compensation point (RCP).

Oxynet addresses this by combining:

1. **Collective intelligence**: A large dataset of expert annotations from multiple exercise physiologists worldwide.
2. **Deep learning**: Neural networks trained to reproduce the aggregate expert judgement.
3. **Uncertainty quantification**: The model outputs not just a prediction, but a measure of confidence based on the degree of expert agreement.

The result is a system that can interpret CPET data at scale, with interpretability and uncertainty bounds — closing the gap between research-grade tools and clinical deployment.`,
  },
  {
    slug: 'ai-training-adaptation',
    title: 'The Greatest Show on Earth',
    date: '2020-03-22',
    excerpt:
      'How AI technologies might assist us to monitor and optimise the chronic physiological adaptations that occur with endurance training, and how AI models might enable more systematic, data-driven training design.',
    externalLink: 'https://hiitscience.com/the-greatest-show-on-earth/',
    content: `In this post, I discuss how AI technologies might assist us to monitor and optimise the chronic physiological adaptations that occur with endurance training, as well as how AI models might be used to develop more data-driven and systematic approaches to training programme design.

The human body's response to training is arguably the greatest show on Earth — a complex, adaptive system that responds to stress in ways we are still learning to understand. AI gives us new tools to observe and model this process, but the science must come first.

[Read the full post on HIIT Science](https://hiitscience.com/the-greatest-show-on-earth/)`,
  },
  {
    slug: 'how-ai-is-not-changing-sport-science',
    title: 'How AI is (not) going to change sport science',
    date: '2019-01-11',
    excerpt:
      "A deliberately provocative take: we don't need AI to become better coaches or sport scientists. We need AI to test old ideas, form new ones, stimulate debate, and move our optimisation forward.",
    externalLink: 'https://hiitscience.com/how-ai-is-not-going-to-change-sport-science/',
    content: `In [this blog post](https://hiitscience.com/how-ai-is-not-going-to-change-sport-science/) with this (for some) controversial title, I discuss why I don't believe that we need AI to become better coaches or better sport scientists.

Indeed, we need AI to test old ideas, and form new ones, to stimulate debate, and move our optimisation forward.

The distinction matters. If we adopt AI as a replacement for scientific thinking, we lose the ability to critically evaluate what it tells us. But if we use AI as a tool to generate and test hypotheses more efficiently, we can accelerate scientific progress without sacrificing rigour.

[Read the full post on HIIT Science](https://hiitscience.com/how-ai-is-not-going-to-change-sport-science/)`,
  },
]
