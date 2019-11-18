interface LatitudeLongitude {
    latitude: number;
    longitude: number;
}

interface LatLng {
    lat: number;
    lng: number;
}

interface LatLon {
    lat: number;
    lon: number;
}

/**
 * Return the Haversine distance in meters
 * @param a - first location
 * @param b - second location
 */
declare function haversineDistance(a: LatitudeLongitude, b: LatitudeLongitude): number;

/**
 * Return the Haversine distance in meters
 * @param a - first location
 * @param b - second location
 */
declare function haversineDistance(a: LatLng, b: LatLng): number;

/**
 * Return the Haversine distance in meters
 * @param a - first location
 * @param b - second location
 */
declare function haversineDistance(a: LatLon, b: LatLon): number;

declare namespace haversineDistance {
    export function haversineDistance(): number;
}

export = haversineDistance;