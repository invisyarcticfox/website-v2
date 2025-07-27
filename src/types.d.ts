export type Link = Array<{
  link: string
  txt: string
  ext?: boolean
  b?: boolean
}>

export type GhRes = Array<{
  sha: string
  node_id: string
  commit: {
    author: { name: string, email: string, date: string }
    committer: { name: string, email: string, date: string }
    message: string
    tree: { sha: string, url: string }
    url: string
  }
  url: string
  html_url: string
  comments_url: string
  parents: Array<{ sha: string, url: string, html_url: string }> | []
}>

export type SonaArt = Array<{
  artist: string
  artisturl: string
  file: string
  date: string
}>

export type GearStuff = Array<{
  label: string
  name?: string
  content?: { name:string }[]
}>