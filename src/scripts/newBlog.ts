(
  async () => {
    try {
      const res = await fetch('https://blog.invisyarcticfox.uk/blogs.json')
      const d = await res.json()
      const latest = d[0]
      const lsLastSeen = localStorage.getItem('lastSeenPost')
      const blogLink = document.querySelector('.links ul li a.blog') as HTMLElement

      console.log('latest blog:', latest.id)
      console.log('local storage:', lsLastSeen)
      console.log(blogLink)

      if ( lsLastSeen && lsLastSeen !== latest.id ) {
        blogLink.classList.add('new')
        blogLink.title = 'new blog!'
      }

      blogLink.addEventListener('click', () => { localStorage.setItem('lastSeenPost', latest.id) })
    } catch (error) {
      console.error(error)
    }
  }
)()