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
  data: {
    discord_user: {
      id: string
      username: string
      avatar: string
      primary_guild: {
        tag: string
        identity_guild_id: string
        badge: string
        identity_enabled: boolean
      }
      global_name: string
      display_name: string
    }
    activities: Array<{
      flags: number
      id: string
      name: string
      type: number
      state: string
      session_id: string
      details: string
      application_id: string
      assets: { large_image: string, large_text: string }
      buttons: Array<string>
      created_at: number
      status_display_type: number
    }>
    discord_status: string
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
  }
  success: boolean
}