function cardGame(elmID, data) {
  data = {
    name: 'Vampire',
    image:
      'https://images.gog-statics.com/66d28031e0ddc6c31d914b10aa0943736c877428518223b6c73ab262819a29bb_bg_crop_1366x655.jpg',
    system: 'windows',
    discountPct: 50,
    price: 7.49
  }
  const template = `
    <div style="width: 227px; height: 103; background-color: #ECECEC;" class="card">
      <img src="${data.image}" class="card-image-top border-bottom border-secondary" alt="" />
      <div class="card-body">
        <h3>${data.name}</h3>
        <p>fjaldjflajdfjalkjdlfjalkjdfljaldjflajlkdjfkjakdjlfjlaldjfljaljdlflajlkdjfljaljdljflajldjjljfljadljl</p>
      </div>
    </div>
  `

  const selected = document.getElementById(elmID)
  selected.innerHTML = template

  return selected
}

export { cardGame }
