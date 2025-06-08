const day = new Date()

const isMayFourth = (day.getMonth() === 4 && day.getDate() === 4)
console.log(isMayFourth)

const popperImg = document.querySelector('.imgs .popper') as HTMLElement
popperImg.style.visibility = isMayFourth ? 'visible' : 'hidden'