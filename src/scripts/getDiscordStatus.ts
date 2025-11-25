import type { discordStatus } from '@/types'

const pfp = document.querySelector<HTMLImageElement>('#pfp img')!
const statusColours = { online: '#23A55A', idle: '#F0B232', dnd: '#F23F43', offline: '#80848E' };


(async () => {
  const res = await fetch('https://api.lanyard.rest/v1/users/470193291053498369')
  const d:discordStatus = await res.json()
  console.log(d.data)
  const status = d.data.discord_status
  const statusColour = statusColours[status] || statusColours.offline

  pfp.style.borderColor = statusColour
})()