export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton)
    this.closeButton = document.querySelector(closeButton)
    this.modalContainer = document.querySelector(modalContainer)

    // bind "this" to callback to make refference to the object of the class
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickOutModal = this.clickOutModal.bind(this)
  }

  // open or close the modal
  toggleModal() {
    this.modalContainer.classList.toggle('active')
  }

  // add the toggle event to the modal
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  // close the modal when clicked outside
  clickOutModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal()
    }
  }

  // add the events to the modal elements
  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal)
    this.closeButton.addEventListener('click', this.eventToggleModal)
    this.modalContainer.addEventListener('click', this.clickOutModal)
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvents()
    }
    return this
  }
}
