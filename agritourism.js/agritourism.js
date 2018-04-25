document.addEventListener('DOMContentLoaded', function () {

    // create the map
    var map = L.map('map').setView([38.595983, 22.558001], 7);

    // add the mapbox layer 
    L.tileLayer('https://api.mapbox.com/styles/v1/selinn/cj86dtp2419g02rql4prcpxkc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VsaW5uIiwiYSI6ImNpaDZrdm93ZjAxM2V1Ym1haWt6ajAxNm8ifQ.LRNG2yVRAmX688lpbp6lpg',
                {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);
    
    var wmsLayer = L.tileLayer.wms('http://geodata.gov.gr/geoserver/ows', {
    layers: 'geodata.gov.gr:36ab4be0-8bd5-4eac-8a83-917811e995b1'
}).addTo(map);
});