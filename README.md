color-scale
===========

Module for generating a color scale

Install
-------
`npm install color-scale --save`

Use
---
```js
var ColorScale = require('color-scale');
var cs = ColorScale({
  color: '#00F',
  variance: 20
});

cs(-1) //Outputs #0000CC
```

