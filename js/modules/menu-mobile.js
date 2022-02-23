import outsideClick from './outsideclick.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const mainEvents = ['click', 'touchstart']
  function openMenu() {
    menuList.classList.add('active')
    menuButton.classList.add('active')
    outsideClick(menuList, mainEvents, () => {
      menuButton.classList.remove('active')
      menuList.classList.remove('active')
    })
  }

  if (menuButton) {
    mainEvents.forEach((activity) => menuButton.addEventListener(activity, openMenu))
  }
}
