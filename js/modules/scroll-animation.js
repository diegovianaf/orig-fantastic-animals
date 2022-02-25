import debounce from './debounce.js'

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.halfWindow = window.innerHeight * 0.6

    this.checkDistance = debounce(this.checkDistance.bind(this), 20)
  }

  // Gets the distance of each item from to the top of the site

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      }
    })
  }

  // Check the distance on each object relative to the site's scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active')
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active')
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }

  // Removes the scroll event
  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }
}
