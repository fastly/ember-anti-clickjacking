/* globals document, self, top */
(function () {
  if (self === top) {
    var antiClickjack = document.getElementById('antiClickjack')

    if (!antiClickjack) return

    antiClickjack.parentNode.removeChild(antiClickjack)
  } else {
    top.location = self.location
  }
})()
