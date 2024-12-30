var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_1954_2 = new ol.format.GeoJSON();
var features_1954_2 = format_1954_2.readFeatures(json_1954_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1954_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1954_2.addFeatures(features_1954_2);
var lyr_1954_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1954_2, 
                style: style_1954_2,
                popuplayertitle: '1954年台灣醫師名鑑整合',
                interactive: true,
                title: '<img src="styles/legend/1954_2.png" /> 1954年台灣醫師名鑑整合'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_1954_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_1954_2];
lyr_1954_2.set('fieldAliases', {'姓名': '姓名', '籍貫': '籍貫', '性別': '性別', '出生年': '出生年', '出生地': '出生地', '畢業學校': '畢業學校', '畢業年': '畢業年', '學位': '學位', '經歷': '經歷', '住址': '住址', '經度': '經度', '緯度': '緯度', '任職單位': '任職單位', '職稱': '職稱', '出處': '出處', '建檔人': '建檔人', '備註': '備註', });
lyr_1954_2.set('fieldImages', {'姓名': 'TextEdit', '籍貫': 'TextEdit', '性別': 'TextEdit', '出生年': 'TextEdit', '出生地': 'TextEdit', '畢業學校': 'TextEdit', '畢業年': 'TextEdit', '學位': 'TextEdit', '經歷': 'TextEdit', '住址': 'TextEdit', '經度': 'TextEdit', '緯度': 'TextEdit', '任職單位': 'TextEdit', '職稱': 'TextEdit', '出處': 'TextEdit', '建檔人': 'TextEdit', '備註': 'TextEdit', });
lyr_1954_2.set('fieldLabels', {'姓名': 'inline label - always visible', '籍貫': 'inline label - always visible', '性別': 'inline label - always visible', '出生年': 'inline label - always visible', '出生地': 'inline label - always visible', '畢業學校': 'inline label - always visible', '畢業年': 'inline label - always visible', '學位': 'inline label - always visible', '經歷': 'inline label - always visible', '住址': 'inline label - always visible', '經度': 'inline label - always visible', '緯度': 'inline label - always visible', '任職單位': 'inline label - always visible', '職稱': 'inline label - always visible', '出處': 'inline label - always visible', '建檔人': 'inline label - always visible', '備註': 'inline label - always visible', });
lyr_1954_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});