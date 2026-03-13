export interface Talk {
  title: string
  type: 'Talk' | 'Tutorial' | 'Podcast' | 'Training Science Podcast'
  venue?: string
  date: string
  location?: string
  description: string
  link?: string
}

export interface PortfolioItem {
  title: string
  excerpt: string
  description?: string
  image?: string
  link?: string
}

export interface TeachingItem {
  title: string
  type: string
  venue: string
  date: string
  location: string
  description?: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  externalLink?: string
  content?: string
}

export interface OrcidWork {
  title: string
  year: string
  journal?: string
  doi?: string
  url?: string
}
