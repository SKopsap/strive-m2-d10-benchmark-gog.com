function buttonAddToCart(elementId, title = '', icon = '') {
  const template = `
    <button style="font-size: 1.3rem; padding: 0.8rem; color: white; border: none; outline: none; background-image: linear-gradient(-180deg, rgb(193, 236, 81), rgb(128, 176, 42)); border-radius: 5px; z-index: 100">
      <span><i style="font-size: 17px" class="${icon}" aria-hidden="true"></i></span>
      ${title}
    </button>
  `

  const selected = document.getElementById(elementId)
  selected.innerHTML = template

  return selected
}

export { buttonAddToCart }
