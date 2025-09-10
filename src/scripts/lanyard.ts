import type { discordStatus } from '@/types'

const pfp = document.querySelector('#pfp img') as HTMLElement

const statusColours = {
  online: '#23A55A',
  idle: '#F0B232',
  dnd: '#F23F43',
  offline: '#80848E'
}

async function getDiscordStatus() {
  try {
    const res = await fetch('https://api.lanyard.rest/v1/users/470193291053498369')
    const { data: d }:discordStatus = await res.json()
    const status = d.discord_status

    pfp.style.borderColor = statusColours[status] || statusColours.offline
    pfp.title = `${status} on discord!`
    console.log(d)
  } catch (error) {
    console.error(error)
  }
}
getDiscordStatus()