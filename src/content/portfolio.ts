import type { PortfolioItem } from '@/types'

export const portfolio: PortfolioItem[] = [
  {
    title: 'Signatures of Fatigue: Transformer-Based Sentiment Analysis',
    excerpt:
      'First large-scale application of transformer-based sentiment and semantic analysis to self-reported training comments from endurance athletes.',
    image: '/images/semantic_analysis.png',
    description:
      'A two-step NLP pipeline extracts emotional tone (joy, sadness) and salient keywords from athlete comments. XGBoost modelling identified subjective "feel" as the strongest predictor of emotional state. Demonstrates how semantic analysis can complement traditional internal load monitoring.',
  },
  {
    title: 'AI Coaching: Computational Paths of Knowledge',
    excerpt:
      'How LLMs navigate complex semantic spaces to simulate human coaching reasoning, using RAG pipelines and agentic frameworks.',
    image: '/images/tweet_computation_paths_of_knowledge.png',
    description:
      'Proposes that LLMs can represent the underlying structure of the world as described through language. A multi-step methodology including RAG pipelines and semantic trajectory analysis demonstrates coherent reasoning pathways. Introduces an agentic framework orchestrating multiple LLMs for AI coaching.',
    link: 'https://sportperfsci.com/wp-content/uploads/2025/05/SPSR256_Zignoli.pdf',
  },
  {
    title: 'AI-Assisted HRV Monitoring',
    excerpt:
      'RAG-AI models that contextualise individual HRV and RHR data for dynamic training load adjustments.',
    image: '/images/HRV_guided_chord.jpeg',
    description:
      'An innovative framework within Sports Science 3.0 integrating AI with physiological metrics. RAG-AI processes domain-specific knowledge to enable nuanced interpretation of HRV/RHR including 60-day reference values and 7-day rolling averages. Emphasises synergy between AI analytics and human coaching expertise.',
    link: 'https://martin-buchheit.net/wp-content/uploads/2024/11/SPSR241_Zignoli.pdf',
  },
  {
    title: 'The Oxynet Project',
    excerpt:
      'Deep learning applied to cardiopulmonary exercise test interpretation — a collective intelligence approach.',
    image: '/images/oxynet.png',
    description:
      'Application of deep learning to automate and standardise the interpretation of CPET data, enabling large-scale analysis and reducing inter-rater variability.',
  },
  {
    title: 'Vehicle Dynamics & Cycling Trajectories',
    excerpt:
      'Optimal control techniques applied to the study of cycling racing lines and descending trajectories.',
    image: '/images/art_of_descending_1.png',
    description:
      'Fascinated by racing lines and optimal trajectories, this project applies vehicle dynamics and optimal control to understand and predict the behaviour of cyclists in real-world race scenarios.',
  },
  {
    title: 'Mathematical Modelling in Cycling ITT',
    excerpt:
      'Predicting the contribution of height and weight on time trial performance using physics-based models.',
    image: '/images/time_difference_in_height.png',
    description:
      'A mathematical model that quantifies how anthropometric parameters influence time trial performance, enabling evidence-based athlete profiling and equipment selection.',
  },
  {
    title: 'Vehicle Dynamics & Forensic Engineering',
    excerpt:
      'Using optimal control and vehicle dynamics to position barriers and improve safety in cycling races.',
    image: '/images/design_barriers.png',
    description:
      'Application of engineering principles to race organisation, using simulation to determine optimal barrier placement for cyclist safety in road races.',
  },
  {
    title: 'The Adherence Ellipse in Professional Cycling',
    excerpt:
      'Tyre adherence modelling and g-g diagrams applied to professional cycling race data.',
    image: '/images/gg_plot_info.png',
    description:
      'Analysis of the friction ellipse (g-g diagram) in the context of professional cycling, providing insights into the limits of tyre adherence and cornering performance.',
  },
  {
    title: 'Trajectory Comparison via Optimal Control',
    excerpt:
      'Comparing cycling trajectories using optimal control techniques to identify performance-defining characteristics.',
    image: '/images/trajectory_comparison_1.png',
    description:
      'Systematic comparison of cycling trajectories using optimal control, identifying key differences between expert and novice descending strategies.',
  },
]
