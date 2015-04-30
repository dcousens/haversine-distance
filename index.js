function squared(x) { return x * x }
function toRad(x) { return x * Math.PI / 180 }

var atan2 = Math.atan2
var cos = Math.cos
var sin = Math.sin
var sqrt = Math.sqrt

// (mean) radius of Earth (meters)
var R = 6378137

// https://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3
module.exports = function haversineDistance(a, b) {
  var dLat = toRad(b.latitude - a.latitude)
  var dLon = toRad(b.longitude - a.longitude)

  var f = squared(sin(dLat / 2)) + cos(toRad(a.latitude)) * cos(toRad(b.latitude)) * squared(sin(dLon / 2))
	var c = 2 * atan2(sqrt(f), sqrt(1 - f))

  return R * c
}
