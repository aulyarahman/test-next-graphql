export interface AnimeDataTypes {
  Page: Page
}

export interface Page {
  pageInfo: PageInfo
  media: Media[]
}

export interface Media {
  id: number
  title: Title
  hashtag: null
  description: string
  bannerImage: string
  coverImage: CoverImage
  genres: string[]
  startDate: StartDate
}

export interface CoverImage {
  extraLarge: string
  large: string
  medium: string
  color: string
}

export interface StartDate {
  year: number
  month: number
  day: number
}

export interface Title {
  romaji: string
  english: string
  native: string
}

export interface PageInfo {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}
