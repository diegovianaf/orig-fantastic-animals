// Return all images from the site on the console
const imgs = document.querySelectorAll('img')
console.log(imgs)

// Return on the console only the images that start with the word image
const animalImages = document.querySelectorAll('[src^="img/img"]')
console.log(animalImages)

// Select all internal links (where the href begins with #)
const internalLinks = document.querySelectorAll('[href^="#"]')
console.log(internalLinks)

// Select the first h2 inside of .animals-description
const h2Animals = document.querySelector('.animals-description h2')
console.log(h2Animals)

// Select the last p of the site
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs[--paragraphs.length])


