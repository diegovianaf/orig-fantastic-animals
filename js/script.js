// ANIMALS
function initTabNav() {
  const tabNav = document.querySelectorAll('[data-tab="navbar"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  if (tabNav.length && tabContent.length) {
    tabContent[0].classList.add('active')

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active')
      })
      const direction = tabContent[index].dataset.anime
      tabContent[index].classList.add('active', direction)
    }

    tabNav.forEach((itemNav, index) => {
      itemNav.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()

// FAQ
function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  const activeClass = 'active'

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()

// SMOOTH SCROLL
function initSmoothScroll() {
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
initSmoothScroll()

// SCROLL ANIMATION
function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - halfWindow <= 0
        if(isSectionVisible)
          section.classList.add('active')
        else // optional
          section.classList.remove('active') 
      })
    }

    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}
initScrollAnimation()