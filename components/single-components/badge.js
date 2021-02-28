function badge(elemenetId, title = '') {
  const template = `  
  <h6 style="font-size: 1.4rem; font-weight: 100"><span style="background-color: #78387B; padding: 0.5rem" class="badge badge-secondary">-${title}%</span></h6>
  `

  const selected = document.getElementById(elemenetId)
  selected.innerHTML = template

  return selected
}

export { badge }
