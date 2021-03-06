$(document).ready(function(){
    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active')
        $('.sidebarBtn').toggleClass('toggle')
    })
})



  


let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:48.53369367189208, lng: 1.4822919397337555 },
    zoom: 12,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Accepteer la localisation";
  
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("vous êtes ici");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        
      );
      }
  });
  new google.maps.Marker({position:{lat:48.5437654849918,lng:1.5078394955770258},map:map});
}