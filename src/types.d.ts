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


import icnData from '@/data/icons.json'
type icnKeys = keyof typeof icnData

export type Links = {
  href: string;
  slug?: string;
  path?: string;
  hex?: string;
  title?: string;
  isExt?: boolean;
  cstmIcn?: icnKeys;
}

export type Icons = {
  [key: string]: { // Index signature
    path: string;
    hex: string;
  }
}