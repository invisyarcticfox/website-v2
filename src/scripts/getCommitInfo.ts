import type { GhRes } from '@/types'

export async function getCommitInfo(url:boolean=false, sha:boolean=false):Promise<string | any> {
  try {
    const res = await fetch('https://api.github.com/repos/invisyarcticfox/website-v2/commits')
    const d:GhRes = await res.json()

    if (url) {
      console.log( d[0].html_url )
      return d[0].html_url
    } else if (sha) {
      console.log( d[0].sha.slice(0,7) )
      return d[0].sha.slice(0,7)
    }
  } catch (error) {
    console.error(error)
  }
}