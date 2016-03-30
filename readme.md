# webkit-scrollbar-class [![Build Status](https://travis-ci.org/bendrucker/webkit-scrollbar-class.svg?branch=master)](https://travis-ci.org/bendrucker/webkit-scrollbar-class)

> Create a random class name that implements scrollbar pseudoclass styling in CSS


## Install

```
$ npm install --save webkit-scrollbar-class
```


## Usage

```js
var scrollbar = require('webkit-scrollbar-class')

var className = scrollbar({
  main: {
    width: '1px'
  },
  track: {
    background: 'blue'
  },
  thumb: {
    background: 'red'
  }
})
//=> cikpsfdg40000z9oj9dkwfzas
```

## API

#### `scrollbar(styles)` -> `string`

Returns a string ID. 

##### styles

*Required*  
Type: `object`

An object containing `{main, track, thumb}`, implementing:

* `::-webkit-scrollbar`
* `::-webkit-scrollbar-track`
* `::-webkit-scrollbar-thumb`


## License

MIT © [Ben Drucker](http://bendrucker.me)
