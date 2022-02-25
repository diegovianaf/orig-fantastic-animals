export default class AnimaNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    // bind the this object to the mutation callback
    this.handleMutation = this.handleMutation.bind(this)
  }

  // Receives an element from the dom, with number in its text increments from 0 to the final number
  static incrementNumber(aNumber) {
    const total = +aNumber.innerText
    const increment = Math.floor(total / 100)
    let start = 0
    const timer = setInterval(() => {
      start += increment
      aNumber.innerText = start
      if (start > total) {
        aNumber.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }

  // Activates increment number for each selected number of the dom
  animaNumbers() {
    this.numbers.forEach((aNumber) => this.constructor.incrementNumber(aNumber))
  }

  // Function that occurs when mutations take place
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumbers()
    }
  }

  // Adds MutationObserver to check how much the class 'active' is added to the target element
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
