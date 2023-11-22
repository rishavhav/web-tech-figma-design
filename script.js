document.getElementById("myButton").onclick = function () {
  location.href = "some_url"
}

document.getElementById("scrollSlider").addEventListener("input", function () {
  var container = document.getElementById("boxContainer")
  var maxScrollLeft = container.scrollWidth - container.clientWidth
  container.scrollLeft = (this.value / 100) * maxScrollLeft
})

function joinMailingList() {
  var email = "rs1470@rit.edu"
  var subject = encodeURIComponent("Subscription Request")
  var emailBody = encodeURIComponent("I want to subscribe to your mailing list!")
  window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody
}
