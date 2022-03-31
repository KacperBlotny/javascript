// Onclick funsctions

// Onclick for dateAsc
let VARdateAsc = document.getElementById('dateAsc')
function dateAsc() {
  clear()
  VARdateAsc.classList.replace('filterbutton', 'choosenFilter')

  load_data(dateAsc)
}

// Onclick for dateDsc
let VARdateDsc = document.getElementById('dateDsc')
function dateDsc() {
  clear()
  VARdateDsc.classList.replace('filterbutton', 'choosenFilter')

  load_data(dateDsc)
}

// Onclick for priceAsc
let VARpriceAsc = document.getElementById('priceAsc')
function priceAsc() {
  clear()
  VARpriceAsc.classList.replace('filterbutton', 'choosenFilter')

  load_data(priceAsc)
}

// Onclick for priceDsc
let VARpriceDsc = document.getElementById('priceDsc')
function priceDsc() {
  clear()
  VARpriceDsc.classList.replace('filterbutton', 'choosenFilter')

  load_data(priceDsc)
}

// Clearing other options
function clear() {
  VARdateAsc.classList.replace('choosenFilter', 'filterbutton')
  VARdateDsc.classList.replace('choosenFilter', 'filterbutton')
  VARpriceAsc.classList.replace('choosenFilter', 'filterbutton')
  VARpriceDsc.classList.replace('choosenFilter', 'filterbutton')
}

// Session starters

// Session start for dateAsc
if (session == 'dateAsc') {
  VARdateAsc.classList.replace('filterbutton', 'choosenFilter')
}

// Session start for dateDsc
if (session == 'dateDsc') {
  VARdateDsc.classList.replace('filterbutton', 'choosenFilter')
}

// Session start for priceAsc
if (session == 'priceAsc') {
  VARpriceAsc.classList.replace('filterbutton', 'choosenFilter')
}

// Session start for priceDsc
if (session == 'priceDsc') {
  VARpriceDsc.classList.replace('filterbutton', 'choosenFilter')
}

// Load data function
function load_data(sortType) {
  var form_data = new FormData()

  form_data.append('sort', sortType)

  var ajax_request = new XMLHttpRequest()

  ajax_request.open('POST', 'sort.php')

  ajax_request.send(form_data)
}
