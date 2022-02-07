export default function initTabNav() {
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