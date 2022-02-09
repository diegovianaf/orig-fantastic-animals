import outsideClick from './outsideclick.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const mainEvents = ['click', 'touchstart']

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add('active')
      menuButton.classList.add('active')
      outsideClick(menuList, mainEvents, () => {
        menuButton.classList.remove('active')
        menuList.classList.remove('active')
      })
    }  
    mainEvents.forEach(activity => menuButton.addEventListener(activity, openMenu))
  }
}
// para que a funcao "outsideClick(menuList..." funcione, foi preciso adicionar um setTimeout no arquivo 'outsideClick.js'