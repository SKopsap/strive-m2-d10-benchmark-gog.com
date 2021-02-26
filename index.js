import './css/index.scss'

import { navbar } from './components/single-components/navbar'
import { footer } from './components/single-components/footer'
import { titleSection } from './components/single-components/titleSection'
import { carouselHeader } from './components/single-components/carouselHeader'

const state = {
  data: {}
}

// fetch data from mock api
fetch('./api/mock-data.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    const { games } = data
    state.data = { games, ...data }
  })

// render function
window.onload = function () {
  // header sections
  navbar()
  titleSection('section-hero-title', 'fa-pencil', 'Highlights')
  carouselHeader('section-hero-carousel', state.data)

  // main body sections
  titleSection('onsale-container', 'fa-pencil', 'Now on sale')
  titleSection('whatsgood-container', 'fa-star', "What's good?")
  titleSection('recommended-container', 'fa-compass', 'Recommended for you')
  titleSection('discovergames-container', 'fa-compass', 'Discover games')
  titleSection('news-container', 'fa-megaphone', 'News')

  footer()
}
