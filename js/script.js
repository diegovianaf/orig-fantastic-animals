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