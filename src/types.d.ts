export type lanyardRes = {
  data: {
    spotify: {
      track_id: string
      timestamps: {
        start: number
        end: number
      }
      song: string
      artist: string
      album_art_url: string
      album: string
    } | null
  }
}

export type sonaArt = Array<{
  artist: string;
  artisturl: string;
  platform: string;
  file: string;
  date: string;
  dateUnix: number;
}>

export type charInfo = Array<{
  char: string;
  names: string[];
  stDelIn: number;
}>

export type Links = {
  href: string;
  slug?: string;
  path?: string;
  hex?: string;
  title: string;
  isExt?: boolean;
  cstmIcn?: string;
}

type IconData = {
  path: string;
  hex: string;
}
export type Icons = {
  [key: string]: IconData
}