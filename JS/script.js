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
  locationButton.textContent = "ACCEPTER LA LOCALISATION";
  
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
  new google.maps.Marker({position:{lat:48.50836572628682,lng:1.4676198836749883},map:map,icon:"../styles/images/ÉLEMENTSGRAPHIQUES/mardi.png"});
  new google.maps.Marker({position:{lat:48.54485910343264,lng:1.553107250413937},map:map,icon:"../styles/images/ÉLEMENTSGRAPHIQUES/mercredi.png"});
  new google.maps.Marker({position:{lat:48.565083973160704,lng:1.506930339838816},map:map,icon:"../styles/images/ÉLEMENTSGRAPHIQUES/jeudi.png"});
  new google.maps.Marker({position:{lat:48.55349543031659,lng:1.4312276710299094},map:map,icon:"../styles/images/ÉLEMENTSGRAPHIQUES/vendredi.png"});
  new google.maps.Marker({position:{lat:48.5132756128429,lng:1.4208688031111956},map:map,icon:"../styles/images/ÉLEMENTSGRAPHIQUES/samedi.png"});
  new google.maps.Marker({position:{lat:48.54341797458354,lng:1.3888971383320745},map:map,icon:"../styles/images/ÉLEMENTSGRAPHIQUES/dimanche.png"});
}