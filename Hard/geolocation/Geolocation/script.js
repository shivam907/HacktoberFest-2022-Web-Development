const latt = document.getElementById("lat-t");
const lont = document.getElementById("lon-t");
const latd = document.getElementById("lat-d");
const lond = document.getElementById("lon-d");

function getLocation() {
  // console.log();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    // Write code here.
  } else {
    x.textContent = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latt.textContent = "Latitude: ";
  latd.textContent = position.coords.latitude;
  lont.textContent = " Longitude: ";
  lond.textContent = position.coords.longitude;
}
