// ANIMALS
function initTabNav() {
  const tabNav = document.querySelectorAll('.js-tabnav li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabNav.length && tabContent.length) {
    tabContent[0].classList.add('active')

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active')
      })
      tabContent[index].classList.add('active')
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
  const accordionList = document.querySelectorAll('.js-accordion dt')
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
  const internalLinks = document.querySelectorAll('.js-navbar a[href^="#"')

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
  const sections = document.querySelectorAll('.js-scroll')
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
