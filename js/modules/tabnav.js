export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'active'
  }

  // active the tab according to its index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass)
    })
    const direction = this.tabContent[index].dataset.anime
    this.tabContent[index].classList.add(this.activeClass, direction)
  }

  // add the events on the tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemmenu, index) => {
      itemmenu.addEventListener('click', () => this.activeTab(index))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // active the first item
      this.activeTab(0)
      this.addTabNavEvent()
    }
    return this
  }
}
