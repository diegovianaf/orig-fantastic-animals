import SmoothScroll from './modules/smooth-scroll.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initOperating from './modules/operating.js'
import fetchAnimals from './modules/fetch-animals.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import initScrollAnimation from './modules/scroll-animation.js'

const smoothScroll = new SmoothScroll('[data-navbar="smooth"] a[href^="#"]')
smoothScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="navbar"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]')
modal.init()

const tooltip = new Tooltip('[data-toolTip]')
tooltip.init()

initDropdownMenu()
initMenuMobile()
initOperating()
initScrollAnimation()

fetchAnimals('../../animalsapi.json', '.numbers-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-price')
