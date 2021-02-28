import { buttonAddToCart } from './buttonAddToCart'

function carouselHero(elementId, data) {
  const template = `
  <div id="carouselExampleIndicators" class="carousel p-0 container slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target4="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div style="position: absolute; bottom: 20px; left: 20px"><h2 style="color: white">${data[0].name}</h2></div>
        <div id="add-to-cart" style="position: absolute; bottom: 20px; right: 20px"></div>
        <div id="price-label" style="position: absolute; bottom: 20px; right: 200px"><h3 style="color: white">£ ${data[0].price}</h3></div>
        <img src="${data[0].image}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${data[1].image}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${data[2].image}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${data[3].image}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${data[4].image}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${data[5].image}" class="d-block w-100" alt="...">
      </div>
    </div>
    <a style="z-index: 10" class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a style="z-index: 10"  class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  `
  const selected = document.getElementById(elementId)
  selected.innerHTML = template

  // construct components from other files used in this component
  buttonAddToCart('add-to-cart', 'Add to cart', 'fa fa-shopping-cart')

  return selected
}

export { carouselHero }
