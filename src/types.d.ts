export type social = Array<{
  link: string
  txt?: string
  path: string
  slug: string
}>
export type ext = Array<{
  link: string
  txt: string
  isExt?: boolean
}>

export type sonaArt = Array<{
  artist: string
  artisturl: string
  file: string
  date: string
}>

export type fort = Array<{
  char: string
  slug: string
  names: string[]
}>

export type discordStatus = {
  data: {
    discord_user: {
      id: string
      username: string
      clan: {
        tag: string
        identity_guild_id: string
        badge: string
        identity_enabled: boolean
      }
      avatar_decoration_data: {
        sku_id: string
        asset: string
        expires_at: string
      }
      avatar: string
      discriminator: string
      global_name: string
      display_name: string
    }
    discord_status: 'online' | 'idle' | 'dnd' | 'offline'
    active_on_discord_web: boolean
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
    active_on_discord_embedded: boolean
    listening_to_spotify: boolean
  }
  success: boolean
}