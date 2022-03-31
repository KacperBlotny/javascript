function getVal(input) {
  if (isNaN(input.value) == false) {
    const pageNumberInput = input.value

    var url = new URL(window.location.href)
    var urlParams = url.searchParams

    urlParams.set('p', pageNumberInput)

    window.location.replace(url)
  }
}

// HTML tag
// <input
//           type="number"
//           id="pageNumber"
//           class="inputPageNumber"
//           placeholder="0"
//           onblur="getVal(this)"
//         />
