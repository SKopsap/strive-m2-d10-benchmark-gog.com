function footer() {
  const template = `
    <footer>
      <div class="d-flex-column">
        <div>
          <p>row1</p>
        </div>
        <div>
          <p>row2</p>
        </div>
        <div>
          <p>row3</p>
        </div>
      <div>
    </footer>
  `

  const section = document.getElementById('section-footer')
  section.innerHTML = template

  return section
}

export { footer }
