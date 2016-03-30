
'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var path = require('path')
var fs = require('fs')

test(function (t) {
  t.plan(3)

  var expected = fs.readFileSync(path.resolve(__dirname, 'fixture.css'), 'utf8').trim()
  var scrollbar = proxyquire('./', {
    'cuid': function () {
      return 'randId'
    },
    'insert-styles': function (css) {
      t.equal(css, expected, 'inserts css into head')
    }
  })

  var id = scrollbar({main: {color: 'red'}, track: {background: 'blue'}})
  t.equal(id, 'randId', 'returns randomized class')

  var cachedId = scrollbar({main: {color: 'red'}, track: {background: 'blue'}})
  t.equal(cachedId, 'randId', 'returns same class for deeply equal input')
})
