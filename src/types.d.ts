export type Link = {
  link: string
  txt: string
  ext?: boolean
  b?: boolean
}[]

export type blogEntries = {
  title: string
  id: string
  body: string
  date: string
  readTime: string
  charCount: string
}[]

export type discordStatus = {
  data: { discord_status: 'offline' | 'online' | 'idle' | 'dnd' }
  success: boolean
}

export type LastFM = {
  recenttracks: {
    track: {
      artist: { mbid: string, '#text': string }
      streamable: string
      image: { size: string, '#text': string }[]
      mbid: string
      album: { mbid: string, '#text': string }
      name: string
      '@attr'?: { nowplaying: string }
      url: string
      date?: { uts: string, '#text': string }
    }[]
    '@attr': {
      user: string
      totalPages: string
      page: string
      perPage: string
      total: string
    }
  }
}
