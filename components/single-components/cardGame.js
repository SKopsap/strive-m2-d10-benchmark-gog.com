import { get } from 'jquery'

function cardGame(elmID, data) {
  const template = `
    <div>
      
    </div>
  `

  const selected = document.getElementById(elmID)
  selected.innerHTML = template

  return selected
}

export { cardGame }
