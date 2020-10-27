import { people } from '../data/people.js'

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.appendChild(mainHeader)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

maleButton.addEventListener('click', event => {
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    const charFigure = document.createElement('figcaption')
})
