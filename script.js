document.getElementById("myButton").onclick = function () {
  location.href = "some_url"
}

document.getElementById("scrollSlider").addEventListener("input", function () {
  var container = document.getElementById("boxContainer")
  var maxScrollLeft = container.scrollWidth - container.clientWidth
  container.scrollLeft = (this.value / 100) * maxScrollLeft
})
