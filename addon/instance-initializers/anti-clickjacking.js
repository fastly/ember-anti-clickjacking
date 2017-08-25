/* globals self, top */
export default {
  name: 'anti-clickjacking',

  initialize () {
    if (self === top) {
      const antiClickjack = document.getElementById('antiClickjack')

      if (!antiClickjack) return

      antiClickjack.parentNode.removeChild(antiClickjack)
    } else {
      top.location = self.location
    }
  }
}
