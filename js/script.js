import SmoothScroll from './modules/smooth-scroll.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import DropdownMenu from './modules/dropdown-menu.js'
import MenuMobile from './modules/menu-mobile.js'
import StoreOperation from './modules/store-operation.js'
import fetchAnimals from './modules/fetch-animals.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import ScrollAnimation from './modules/scroll-animation.js'
import SlideNav from './modules/slide.js'

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

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]')
scrollAnimation.init()

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const storeOperation = new StoreOperation('[data-week]', 'open')
storeOperation.init()

fetchAnimals('animalsapi.json', '.numbers-grid')

fetchBitcoin('https://blockchain.info/ticker', '.btc-price')

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()
slide.addControl('.custom-controls')
