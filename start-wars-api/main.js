import { films } from './data/films.js'
import { people } from './data/people.js'

//console.log(people.length)

//console.log(films[0])

const newParagraph = document.createElement("p")

films.forEach(film => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = film.title
}) 