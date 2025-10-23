import type { discordStatus } from '@/types'

const pfp = document.querySelector<HTMLElement>('#pfp img')
const lfmC = document.querySelector<HTMLElement>('#pfp .listening')
const lfmLink = lfmC!.querySelector<HTMLElement>('a')
const lfmTxt = lfmC!.querySelector<HTMLElement>('span')

const statusColours = {
  online: '#23A55A',
  idle: '#F0B232',
  dnd: '#F23F43',
  offline: '#80848E'
}


async function getStatus() {
  try {
    const res = await fetch('https://api.lanyard.rest/v1/users/470193291053498369')
    const d:discordStatus = await res.json()
    console.log(d.data)
    const { discord_status, activities } = d.data
    const lastfm = activities.find(a => a.application_id === '1108588077900898414')

    pfp!.style.borderColor = statusColours[discord_status as keyof typeof statusColours] || statusColours.offline
    pfp!.title = `${discord_status} on discord!`

    if (lastfm) {
      const { details:song, name:artist } = lastfm
      console.log(`listening to ${song} by ${artist}`)
      lfmC!.style.display = ''
      lfmLink!.setAttribute('href', `https://last.fm/music/${encodeURIComponent(artist)}/_/${encodeURIComponent(song)}`)
      lfmTxt!.innerHTML = `<b>${song}</b> by <b>${artist}</b>`
    }
  } catch (error) {
    console.error(error)
  }
}
getStatus()