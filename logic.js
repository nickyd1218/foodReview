//   Pull the restaurants property off of sdtop10
var restaurants = sdtop10;
console.log(restaurants.length)
// Initialize an array to hold restaurant Markers

var restaurantMarkers = [];
 
// Loop through the restaurants array
for (var index = 0; index < restaurants.length; index++) {

    var eat = restaurants[index];
 
    // For each restaurant

    var restaurantMarker = L.marker([eat.lat, eat.lon])
      .bindPopup("<h3>Name: " + eat.name + "<h3><h3>Location: " + eat.location + "<h3><h3>Address: " + eat.address +"<h3><h3>Zipcode: " + eat.zip);
    console.log(restaurantMarker)
    // Add the marker to the restaurant

    restaurantMarkers.push(restaurantMarker);
  };

console.log(restaurantMarkers)

var eatLayer = L.layerGroup(restaurantMarkers)

  // Create the tile layer that will be the background of our map
var street = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
  });

var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });
 
// Create a baseMaps object to hold the lightmap layer
var baseMaps = {
    "Street": street,
    "Light": light,
    "Dark": dark
  };
 
// Create an overlayMaps object to hold the restaurant
var overlayMaps = {
    "Restaurants": eatLayer
  };
 
// Create the map object with options
var map = L.map("map", {
    center: [32.952013, -117.23253],
    zoom: 10,
    layers: [street, eatLayer]
  });
 
// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);