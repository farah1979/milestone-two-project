function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat:  59.334591, lng: 18.063240 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 59.334591, lng: 18.063240 },
  { lat: 59.3500, lng: 18.0000 },
  { lat:  59.4280, lng: 17.9509 },
  { lat: 59.51839, lng:17.91128 },
  { lat: 59.1678, lng:18.1448  },
  { lat: 59.19554, lng: 17.62525 },
  { lat: 58.587745, lng: 16.192421 },
  { lat: 57.70716, lng: 11.96679 },
  { lat: 56.66157, lng: 16.36163 },
  { lat: 55.60587, lng: 13.00073 },
  { lat: 60.67452, lng: 17.14174 },
  { lat: 59.61617, lng: 16.55276 },
  { lat: 59.85882, lng: 17.63889 },
 
];




