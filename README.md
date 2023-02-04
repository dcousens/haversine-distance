# haversine-distance
[![Version](http://img.shields.io/npm/v/haversine-distance.svg)](https://www.npmjs.org/package/haversine-distance)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Haversine formula in Javascript, in meters, nothing else


## Example

### Import

```javascript
const haversine = require('haversine-distance')
// or
import haversine from 'haversine-distance'
```

### Usage

```javascript
const a = { latitude: 37.8136, longitude: 144.9631 }
const b = { latitude: 33.8650, longitude: 151.2094 }

console.log(haversine(a, b)) // 714504.18 (in meters)
```

Alternative forms such as `lat`, `lng` and `lon` work too, with mixed support:

```javascript
const a = { lat: 37.8136, lng: 144.9631 }
const b = { lat: 33.8650, lon: 151.2094 }

console.log(haversine(a, b)) // 714504.18 (in meters)
```

### GeoJSON support

```javascript
const a = [144.9631, 37.8136]
const b = [151.2094, 33.865]

console.log(haversine(a, b)) // 714504.18 (in meters)
```


## LICENSE [MIT](LICENSE)
