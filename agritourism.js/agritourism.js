document.addEventListener('DOMContentLoaded', function () {

    // create the map
    var map = L.map('map').setView([38.595983, 22.558001], 7);

    // add the mapbox basemap 
    L.tileLayer('https://api.mapbox.com/styles/v1/selinn/cj86dtp2419g02rql4prcpxkc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VsaW5uIiwiYSI6ImNpaDZrdm93ZjAxM2V1Ym1haWt6ajAxNm8ifQ.LRNG2yVRAmX688lpbp6lpg',
                {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);
    
    // trying to add in services from geodata.gov.gr
    /* var wmsLayer = L.tileLayer.wms('http://geodata.gov.gr/geoserver/ows', {
        layers: 'geodata.gov.gr:81c',
    }).addTo(map);

    var wmsLayer2 = L.tileLayer.wms('http://geodata.gov.gr/geoserver/ows', {
        layers: 'geodata.gov.gr:262a95fb-2d88-4df8-980f-5ed4de44245b',
        transparent: true
    }).addTo(map);*/


    // add my agritourism feature layer which was published in AGOL
    var agritourism = L.esri.featureLayer({
        url: 'https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Agritourism/FeatureServer/0'
    }).addTo(map);
    agritourism.bindPopup(function (layer) {
        return L.Util.template('<p><h2>{Name}<\h2><h3>FARM TYPE: {FarmType}<\h3><h3>REGION: {Region}<\h3><h3>LINK: {Website}<\h3></p>', layer.feature.properties);
    });




});
