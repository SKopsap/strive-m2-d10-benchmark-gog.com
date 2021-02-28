import './css/index.scss'

import { navbar } from './components/single-components/navbar'
import { footer } from './components/single-components/footer'
import { titleSection } from './components/single-components/titleSection'
import { carouselHero } from './components/single-components/carouselHero'
import { cardGame } from './components/single-components/cardGame'
import { buttonAddToCart } from './components/single-components/buttonAddToCart'

const state = {
  data: [
    {
      name: "Baldur's Gate 3",
      image:
        'https://images-4.gog-statics.com/4d4528321e54adb1529fd2c74511ad3fa701f80093f6ced84f0ffd7a30c5db07_bs_background_1275.webp',
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
      logo:
        'https://images-2.gog-statics.com/081d47ed42b6c88b4cc427fe1350f76c97977660079a78d5d2320c82b138f8c2_bs_logo_small_2x.webp',
      image:
        'https://images-4.gog-statics.com/30f6b549aed1e60b9108be9403c96d7ddf21a2834986488fa34362456ebca3c9_bs_background_1275.webp',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 49.9,
      discountPct: 0,
      systems: ['windows']
    },
    {
      name: 'Vampire the Masquerade Bloodlines',
      image:
        'https://images-1.gog-statics.com/cc0bd13268dd76f59505ba9dbd5e8bc3f5925cd9fe6aa2d3709aea8024b0648f_bs_background_1275.webp',
      onSale: true,
      recommended: true,
      rating: 'good',
      price: 24.99,
      discountPct: 50,
      systems: ['windows']
    },
    {
      name: 'System Shock',
      logo:
        'https://images-2.gog-statics.com/c0a40a3c31a46d4bf1f7d4454f4c4da5bb4f76d85ddaba20485b7c3a793c5610_product_tile_136_2x.webp',
      image:
        'https://images-1.gog-statics.com/e06fc432a6545d850578e79c7de69feb59558662a1d2897ccd6d9f49835273f4_bs_background_1275.webp',
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

// render function
window.onload = function () {
  // header sections
  navbar()
  titleSection('section-hero-title', 'fa fa-pencil', 'Highlights')
  carouselHero('section-hero-carousel', state.data)
  cardGame('section-hero-cards')

  // main body sections
  titleSection('onsale-container', 'fa fa-percent', 'Now on sale')
  titleSection('whatsgood-container', 'fa fa-star', "What's good?")
  titleSection('recommended-container', 'fa fa-compass', 'Recommended for you')
  titleSection('discovergames-container', 'fa fa-compass', 'Discover games')
  titleSection('news-container', 'fa fa-bullhorn', 'News')

  footer()
}
