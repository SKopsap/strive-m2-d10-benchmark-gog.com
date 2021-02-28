import { cardGame } from '../single-components/cardGame'

function cardList(elementId, data, display = 4) {
  const state = {
    data: {}
  }

  // display how many list items are rendered
  state.data = data.slice(0, display)
  console.log(state.data)

  const template = `
    <ul style="list-style: none;" class="p-0 m-0 d-flex flex-wrap justify-content-between" id="card-list">
    </ul>

  `

  const selected = document.getElementById(elementId)
  selected.innerHTML = template
  const ul = document.getElementById('card-list')

  // Generate list
  state.data.forEach((data, i) => {
    let elementId = `card-item-${i}`
    const li = document.createElement('li')
    ul.appendChild(li)
    li.setAttribute('id', elementId)
    cardGame(elementId, data)
  })

  console.log(ul)
}

export { cardList }
