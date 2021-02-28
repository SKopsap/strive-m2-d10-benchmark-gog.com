function titleSection(elementId, icon = '', title = '') {
  const template = `
    <div class="container pl-0 mt-3 mb-4 pb-3 title-section">
      <div class="d-flex flex-row align-items-center">
        <span><i style="font-size: 14px" class="${icon}" aria-hidden="true"></i></span>
        <h6 class="ml-3">${title}</h6>
      </div>
    </div>
  `

  const selected = document.getElementById(elementId)
  selected.innerHTML = template

  return selected
}

export { titleSection }
