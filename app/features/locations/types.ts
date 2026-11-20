export interface LocationContact {
  address: string
  city: string
  state: string
  zip: string
  phone: string
  fax?: string
  email?: string
}

export interface LocationSpecialty {
  title: string
  description?: string
}

export interface LocationGalleryImage {
  src: string
  alt: string
}

export interface LocationNewsItem {
  title: string
  excerpt: string
  image?: string
  to: string
  date?: string
}

export interface LocationData {
  slug: string
  name: string
  city: string

  eyebrow?: string
  title: string
  description: string

  heroImage: string
  heroImageAlt: string

  contact: LocationContact

  intro: {
    eyebrow?: string
    title: string
    paragraphs: string[]
    image: string
    imageAlt: string
  }

  specialties: {
    eyebrow?: string
    title: string
    description?: string
    items: LocationSpecialty[]
  }

  gallery?: LocationGalleryImage[]

  video?: {
    title: string
    description?: string
    src: string
    poster?: string
  }

  news?: LocationNewsItem[]
}
