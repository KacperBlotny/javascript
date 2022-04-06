function clearFilters() {
  var w = document.getElementsByTagName('input')
  for (var i = 0; i < w.length; i++) {
    if (w[i].type == 'checkbox') {
      w[i].checked = false
    }
  }
}

// <a onclick="clearFilters()" class="btn-square-orange">Reset filters</a>
