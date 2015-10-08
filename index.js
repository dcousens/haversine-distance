function squared (x) { return x * x }
function toRad (x) { return x * Math.PI / 180 }

var atan2 = Math.atan2
var cos = Math.cos
var sin = Math.sin
var sqrt = Math.sqrt

// (mean) radius of Earth (meters)
var R = 6378137

// https://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3
module.exports = function haversineDistance (a, b) {
  var aLat = a.latitude || a.lat
  var bLat = b.latitude || b.lat
  var aLng = a.longitude || a.lng
  var bLng = b.longitude || b.lng

  var dLat = toRad(bLat - aLat)
  var dLon = toRad(bLng - aLng)

  var f = squared(sin(dLat / 2)) + cos(toRad(aLat)) * cos(toRad(bLat)) * squared(sin(dLon / 2))
  var c = 2 * atan2(sqrt(f), sqrt(1 - f))

  return R * c
}
