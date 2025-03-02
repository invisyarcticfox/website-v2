export type LanyardRes = {
  data: {
    discord_user: {
      id: string
      username: string
      avatar: string
      discriminator: string
      clan: any
      avatar_decoration_data: {
        sku_id: string
        asset: string
        expires_at: any
      }
      bot: boolean
      global_name: string
      primary_guild: any
      display_name: string
      public_flags: number
    }
    discord_status: string
    active_on_discord_web: boolean
    active_on_discord_desktop: boolean
    active_on_discord_mobile: boolean
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
    }
  }
  success: boolean
}
