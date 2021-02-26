function titleSection(elmID, icon = '', title = '') {
  const template = `
    <div class="container mt-3 mb-3 pb-3 title-section">
      <div class="d-flex flex-row align-items-center">
        <span><i style="font-size: 24px" class="fa ${icon}" aria-hidden="true"></i></span>
        <h4 class="ml-3">${title}</h4>
      </div>
    </div>
  `

  const section = document.getElementById(elmID)
  section.innerHTML = template

  return section
}

export { titleSection }
