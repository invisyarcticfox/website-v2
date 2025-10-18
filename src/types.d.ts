export type Link = Array<{
  link: string
  txt: string
  ext?: boolean
  b?: boolean
}>

export type SonaArt = Array<{
  artist: string
  artisturl: string
  file: string
  date: string
  freaky?: boolean
}>

export type GearStuff = Array<{
  label: string
  name?: string
  content?: { name:string }[]
}>

export type blogEntries = Array<{
  title: string
  id: string
  body: string
  date: string
  readTime: string
  charCount: string
}>

export type discordStatus = {
  kv: { [key:string]: string }
  data: { discord_status: 'online' | 'idle' | 'dnd' | 'offline' }
}