import initAnimaNumbers from './anima-numbers.js'

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()
      const numbersGrid = document.querySelector('.numbers-grid')
      animalsJSON.forEach(animal => {
        const animalDiv = createAnimal(animal)
        numbersGrid.appendChild(animalDiv)
      })
      initAnimaNumbers()
    } catch(error) {
      console.log(Error(error))
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('animal-number')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`
    return div
  }

  fetchAnimals('./animalsapi.json')
}