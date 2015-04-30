# haversine-distance

[![Version](http://img.shields.io/npm/v/haversine-distance.svg)](https://www.npmjs.org/package/haversine-distance)

Haversine formula in Javascript.  In meters.  Nothing more.


## Example

``` javascript
var haversine = require('haversine-distance')

var a = { latitude: 37.8136, longitude: 144.9631 }
var b = { latitude: 33.8650, longitude: 151.2094 }

// 714504.18 (in meters)
console.log(haversine(a, b))
```


## License

This library is free and open-source software released under the MIT license.
