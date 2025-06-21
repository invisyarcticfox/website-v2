export type social = Array<{
  link: string
  txt?: string
  path: string
  slug: string
  svg?: any
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
    kv: { [key:string]:string }
    discord_user: {
      id: string
      username: string
      avatar: string
      clan: {
        tag: string
        identity_guild_id: string
        badge: string
        identity_enabled: boolean
      } | null
      primary_guild: {
        tag: string
        identity_guild_id: string
        badge: string
        identity_enabled: boolean
      } | null
      avatar_decoration_data: {
        sku_id: string
        asset: string
        expires_at: number
      } | null
      collectibles: {
        nameplate: {
          label: string
          sku_id: string
          asset: string
          expires_at: number
          palette: string
        }
      } | null
      global_name: string
      display_name: string
    }
    activities: Array<{
      flags?: number
      id: string
      name: string
      type: number
      state: string
      details: string
      session_id?: string
      timestamps?: {
        start: number
        end: number
      }
      assets?: {
        large_image?: string
        large_text?: string
        small_image?: string
        small_text?: string
      }
      sync_id?: string
      application_id?: string
      created_at: number
      party?: { id: string }
      [key:string]:unknown
    }> | []
    discord_status: 'online' | 'idle' | 'dnd' | 'offline'
    active_on_discord_web: boolean
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
    active_on_discord_embedded: boolean
    listening_to_spotify: boolean
    spotify: {
      timestamps: {
        start: number
        end: number
      }
      album: string
      album_art_url: string
      artist: string
      song: string
      track_id: string
    } | null
  }
}