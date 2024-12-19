var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PetaGeologi_0 = new ol.format.GeoJSON();
var features_PetaGeologi_0 = format_PetaGeologi_0.readFeatures(json_PetaGeologi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaGeologi_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PetaGeologi_0.addFeatures(features_PetaGeologi_0);var lyr_PetaGeologi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PetaGeologi_0, 
                style: style_PetaGeologi_0,
    title: 'Peta Geologi<br />\
    <img src="styles/legend/PetaGeologi_0_0.png" />  Endapan B Sedimen Dasar<br />\
    <img src="styles/legend/PetaGeologi_0_1.png" /> Batuan Sedimen Breksi V<br />\
    <img src="styles/legend/PetaGeologi_0_2.png" /> Endapan Alluvium<br />\
    <img src="styles/legend/PetaGeologi_0_3.png" /> Endapan B Sedimen Dasar<br />\
    <img src="styles/legend/PetaGeologi_0_4.png" /> <br />'
        });

lyr_PetaGeologi_0.setVisible(true);
var layersList = [baseLayer,lyr_PetaGeologi_0];
lyr_PetaGeologi_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'Geologi': 'Geologi', });
lyr_PetaGeologi_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'Geologi': 'TextEdit', });
lyr_PetaGeologi_0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'Geologi': 'no label', });
lyr_PetaGeologi_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});