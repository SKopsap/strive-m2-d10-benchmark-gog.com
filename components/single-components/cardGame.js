import { badge } from './badge'

function cardGame(elementId, data) {
  data = {
    name: 'Vampire',
    image:
      'https://images.gog-statics.com/66d28031e0ddc6c31d914b10aa0943736c877428518223b6c73ab262819a29bb_bg_crop_1366x655.jpg',
    system: 'windows',
    discountPct: 50,
    price: 7.49
  }
  const template = `
    <div style="cursor: pointer; width: 250px; height: 200px; background-color: #ECECEC;" class="card mb-4">
      <img src="${data.image}" class="card-image-top border-bottom border-secondary" alt="" />
      <div class="card-body pt-1">
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
