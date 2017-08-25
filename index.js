var STYLE = '<style id="antiClickjack">body{display:none !important;}</style>'

module.exports = {
  name: 'ember-anti-clickjacking',

  config () {
    return {
      'ember-anti-clickjacking': {
        style: true
      }
    }
  },

  contentFor (type, config) {
    if (type !== 'head-footer') return
    if (!config['ember-anti-clickjacking'].style) return
    return STYLE
  }
}
