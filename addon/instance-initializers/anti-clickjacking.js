/* globals self, top */
export default {
  name: 'anti-clickjacking',

  initialize () {
    if (self !== top) {
      top.location = self.location
    }
  }
}
