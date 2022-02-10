export default function initAnimaNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll('[data-number]')

    numbers.forEach((aNumber) => {
      const total = +aNumber.innerText
      const increment = Math.floor(total / 100)
      let start = 0
      const timer = setInterval(() => {
        start = start + increment
        aNumber.innerText = start
        if (start > total) {
          aNumber.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect()
      animaNumbers()
    }
  }

  const observerTarget = document.querySelector('.numbers')
  const observer = new MutationObserver(handleMutation)

  observer.observe(observerTarget, {attributes: true})
}