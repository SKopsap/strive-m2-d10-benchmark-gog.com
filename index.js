import './css/index.scss'

import { navbar } from './components/single-components/navbar'
import { footer } from './components/single-components/footer'
import { titleSection } from './components/single-components/titleSection'
import { carouselHeader } from './components/single-components/carouselHeader'
import { cardGame } from './components/single-components/cardGame'

const state = {
  data: [
    {
      name: "Baldur's Gate 3",
      image: './assets/carousel1.jpg',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 49.99,
      discountPct: 0,
      systems: ['mac', 'windows']
    },
    {
      name: 'FrostPunk',
      image: './assets/carousel2.jpg',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 8.49,
      discountPct: 66,
      systems: ['mac', 'windows']
    },
    {
      name: 'Cyberpunk 2077',
      image: './assets/carousel3.jpg',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 49.9,
      discountPct: 0,
      systems: ['windows']
    },
    {
      name: 'The Outer Worlds',
      image: './assets/carousel6.jpg',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 24.99,
      discountPct: 50,
      systems: ['windows']
    },
    {
      name: 'The Outer Worlds',
      image: './assets/carousel5.jpg',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 24.99,
      discountPct: 50,
      systems: ['windows']
    },
    {
      name: 'The Outer Worlds',
      image: './assets/carousel6.jpg',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 24.99,
      discountPct: 50,
      systems: ['windows']
    }
  ],
  isSearchOpen: false
}

console.log(state.data)

// render function
window.onload = function () {
  // header sections
  navbar()
  titleSection('section-hero-title', 'fa-pencil', 'Highlights')
  carouselHeader('section-hero-carousel', state.data)
  cardGame('section-hero-cards')

  // main body sections
  titleSection('onsale-container', 'fa-pencil', 'Now on sale')
  titleSection('whatsgood-container', 'fa-star', "What's good?")
  titleSection('recommended-container', 'fa-compass', 'Recommended for you')
  titleSection('discovergames-container', 'fa-compass', 'Discover games')
  titleSection('news-container', 'fa-megaphone', 'News')

  footer()
}
