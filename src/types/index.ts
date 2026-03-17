export interface Talk {
  title: string
  type: 'Talk' | 'Tutorial' | 'Podcast' | 'Training Science Podcast' | 'Video'
  venue?: string
  date: string
  location?: string
  description: string
  link?: string
  linkLabel?: string
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
  link?: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  externalLink?: string
  hasContent?: boolean
}

export interface Publication {
  title: string
  year: string
  journal?: string
  doi?: string
  url?: string
  citations?: number
}
