document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-form")
  if (!searchForm) {
    return
  }

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = searchForm.querySelector("input[name='query']")
    if (!input) {
      return
    }

    const query = input.value.trim()
    if (!query) {
      input.focus()
      return
    }

    console.info("Search submitted:", query)
  })
})
