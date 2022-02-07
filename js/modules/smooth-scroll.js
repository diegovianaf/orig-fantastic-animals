export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('[data-navbar="smooth"] a[href^="#"')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    console.log(section);
    section.scrollIntoView({
      behavior: 'smooth',
      // block: 'start',
    })

    // alternative way
    /* const topo = section.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: 'smooth',
    }); */
  }

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}