'use strict'

var cuid = require('cuid')
var toCss = require('style-css')
var insertStyles = require('insert-styles')
var filter = require('boolean-filter-obj')

var cache = {}

module.exports = function placeholder (styles) {
  var key = JSON.stringify(styles)

  if (cache[key]) return cache[key]

  var id = cuid()
  cache[key] = id

  var classSelector = '.' + id
  var main = classSelector + '::-webkit-scrollbar'
  var track = main + '-track'
  var thumb = main + '-thumb'

  var css = {}
  css[main] = styles.main
  css[track] = styles.track
  css[thumb] = styles.thumb

  insertStyles(toCss(filter(css)))

  return id
}
