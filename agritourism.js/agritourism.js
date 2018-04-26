document.addEventListener('DOMContentLoaded', function () {

    // create the map
    var map = L.map('map').setView([38.595983, 22.558001], 7);

    // add a second basemap option for imagery 
    var imagery = L.esri.basemapLayer("Imagery").addTo(map);

    // add the mapbox basemap 
    var mapboxBase = L.tileLayer('https://api.mapbox.com/styles/v1/selinn/cj86dtp2419g02rql4prcpxkc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2VsaW5uIiwiYSI6ImNpaDZrdm93ZjAxM2V1Ym1haWt6ajAxNm8ifQ.LRNG2yVRAmX688lpbp6lpg',
                                 {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);

    // add Natura feature layer from AGOL
    var natura = L.esri.featureLayer({
        url: 'http://services.arcgis.com/8LakhAMXJCkZcbPU/arcgis/rest/services/MyMapService/FeatureServer/9'
    }).addTo(map);
    natura.bindPopup(function (layer) {
        return L.Util.template('<p><h2>Natural Area (in Greek):<\h2><h3>{Name}<\h3></p>', layer.feature.properties);
    });


    // add Blue Flag beaches feature layer from AGOL
    var blueFlag = L.esri.featureLayer({
        url: 'http://services6.arcgis.com/C9CQoJJu0ZvNoqUy/arcgis/rest/services/blue_flags_greece2010/FeatureServer/0',
    }).addTo(map);
    blueFlag.bindPopup(function (layer) {
        return L.Util.template('{COMMUNE}', layer.feature.properties);
    });

    // add my agritourism feature layer which was published in AGOL
    var agritourism = L.esri.featureLayer({
        url: 'https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Agritourism/FeatureServer/0'
    }).addTo(map);
    agritourism.bindPopup(function (layer) {
        return L.Util.template('<p><h2>{Name}<\h2><h3>FARM TYPE: {FarmType}<\h3><h3>REGION: {Region}<\h3><h3> <a href={Website}>WEBPAGE</a><\h3></p>', layer.feature.properties);
    });

    // add a layer toggle

    var baseLayers = {
        "Imagery": imagery,
        "Base Map": mapboxBase
        
    };

    var overlays = {
        "Enjoy Agritourism!": agritourism,
        "Enjoy Blue Flag Beaches!": blueFlag,
        "Enjoy Natural Areas!": natura
    };

    // http://leafletjs.com/reference-1.0.3.html#control-layers
    L.control.layers(baseLayers, overlays).addTo(map);
});
