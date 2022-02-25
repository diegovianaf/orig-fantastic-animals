import outsideClick from './outsideclick.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)

    // set touchstart and click as default events argument if user does not set
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events

    this.activeClass = 'active'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  // Activates the dropdown-menu and adds the function that watches the click out of it
  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove('active')
    })
  }

  // Adds the events to the dropdown-menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
}
