import SmoothScroll from './modules/smooth-scroll.js'
import initAccordion from './modules/accordion.js'
import initTabNav from './modules/tabnav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initOperating from './modules/operating.js'
import initFetchAnimals from './modules/fetch-animals.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initScrollAnimation from './modules/scroll-animation.js'

const smoothScroll = new SmoothScroll('[data-navbar="smooth"] a[href^="#"]')
smoothScroll.init()

initAccordion()
initTabNav()
initModal()
initTooltip()
initDropdownMenu()
initMenuMobile()
initOperating()
initFetchAnimals()
initFetchBitcoin()
initScrollAnimation()
