import type { discordStatus } from '@/types'

const res = await fetch('https://api.lanyard.rest/v1/users/470193291053498369')
const { data: d }:discordStatus = await res.json()
const status = d.discord_status
console.log(d)

const pfp = document.querySelector('.prof .pfp') as HTMLElement

const statusColours = {
  online: '#23A55A',
  idle: '#F0B232',
  dnd: '#F23F43',
  offline: '#80848E'
}

pfp.style.borderColor = statusColours[status] || statusColours.offline
pfp.title = `${status} on discord!`
