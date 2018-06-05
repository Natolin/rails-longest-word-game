// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`https://wagon-dictionary.herokuapp.com/${@suggestion}`)
    .then(response => response.json())
    .then((data) => {
      // const latitude = data.results[0].geometry.location.lat;
      // const longitude = data.results[0].geometry.location.lng;
      // lat.insertAdjacentHTML("afterbegin", `Your latitude is  ${latitude}`);
      // lng.insertAdjacentHTML("afterbegin", `Your longitude is  ${longitude}`);
      // const map = new GMaps({ el: '#map', lat: `${latitude}`, lng: `${longitude}`, zoom: 14 });
      // const marker = { lat: `${latitude}`, lng: `${longitude}` };
      // map.addMarkers([ marker ]);
    });
});
