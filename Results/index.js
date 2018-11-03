// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");


// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://media.giphy.com/media/l0HlFZ3c4NENSLQRi/giphy.gif' alt='giphy'>");
});
