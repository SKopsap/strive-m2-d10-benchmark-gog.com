import { badge } from './badge'

function cardGame(elementId, data) {
  const template = `
    <div style="cursor: pointer; max-width: 270px; height: 190px; background-color: #ECECEC;" class="card mb-4 mr-0">
      <img style="height: 110px" src="${data.image}" class="card-image-top" alt="" />
      <div class="card-body pt-2">
        <h6>${data.name}</h6>
        <div class="row justify-content-between align-items-center">
          <div class="col col-3" id="platform-icons><i class="fab fa-windows">win</i></div>
          <div style="" class="col col-8">
            <div class="row justify-content-end align-items-center">
              <div>
                <div class="mt-1 mr-2" id="card-badge"></div>
              </div>
              <div>£ 5.59</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  const selected = document.getElementById(elementId)
  selected.innerHTML = template

  // external component initialisation
  badge('card-badge', data.discountPct)

  return selected
}

export { cardGame }
