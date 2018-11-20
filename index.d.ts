export type LocationUnion = LatitudeLongitude | LatLng | LatLon;

interface LatitudeLongitude {
  latitude: number;
  longitude: number;
}

interface LatLng {
  lat:number;
  lng: number;
}

interface LatLon {
  lat: number;
  lon: number;
}

/**
 * Return the Haversine distance in meters
 * @param a first location
 * @param b second location
 */
export function haversineDistance(a: LocationUnion, b: LocationUnion): number;
