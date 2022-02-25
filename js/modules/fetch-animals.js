import AnimaNumbers from './anima-numbers.js'

export default function fetchAnimals(url, target) {
  // Create the div containing information with the total number of animals
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('animal-number')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`
    return div
  }

  // Fills each animal in the DOM
  const numbersGrid = document.querySelector(target)
  function fillAnimals(animal) {
    const animalDiv = createAnimal(animal)
    numbersGrid.appendChild(animalDiv)
  }

  // Animate the numbers of each animal
  function animaAnimalsNumber() {
    const animaNumbers = new AnimaNumbers('[data-number]', '.numbers', 'active')
    animaNumbers.init()
  }

  // Pulls the animals from a json file and creates each animal using createAnimal
  async function createAnimals() {
    try {
      // Fetch, wait for the response and transform to json
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()

      // After the json transformation, activate the functions to fill and animate the numbers
      animalsJSON.forEach((animal) => fillAnimals(animal))
      animaAnimalsNumber()
    } catch (error) {
      console.log(Error(error))
    }
  }

  return createAnimals()
}
