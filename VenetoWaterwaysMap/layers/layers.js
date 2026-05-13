var wms_layers = [];


        var lyr_Topography_0 = new ol.layer.Tile({
            'title': 'Topography',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_StreetLayer_1 = new ol.layer.Tile({
            'title': 'Street Layer',
            'type':'base',
            'opacity': 0.704000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VenetoRegionBasinBoundaries_2 = new ol.format.GeoJSON();
var features_VenetoRegionBasinBoundaries_2 = format_VenetoRegionBasinBoundaries_2.readFeatures(json_VenetoRegionBasinBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VenetoRegionBasinBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VenetoRegionBasinBoundaries_2.addFeatures(features_VenetoRegionBasinBoundaries_2);
var lyr_VenetoRegionBasinBoundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VenetoRegionBasinBoundaries_2, 
                style: style_VenetoRegionBasinBoundaries_2,
                popuplayertitle: 'Veneto Region Basin Boundaries',
                interactive: true,
                title: '<img src="styles/legend/VenetoRegionBasinBoundaries_2.png" /> Veneto Region Basin Boundaries'
            });
var format_VeniceLagoonBoundaries_3 = new ol.format.GeoJSON();
var features_VeniceLagoonBoundaries_3 = format_VeniceLagoonBoundaries_3.readFeatures(json_VeniceLagoonBoundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VeniceLagoonBoundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VeniceLagoonBoundaries_3.addFeatures(features_VeniceLagoonBoundaries_3);
var lyr_VeniceLagoonBoundaries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VeniceLagoonBoundaries_3, 
                style: style_VeniceLagoonBoundaries_3,
                popuplayertitle: 'Venice Lagoon Boundaries',
                interactive: false,
                title: '<img src="styles/legend/VeniceLagoonBoundaries_3.png" /> Venice Lagoon Boundaries'
            });
var format_AllWaterways_4 = new ol.format.GeoJSON();
var features_AllWaterways_4 = format_AllWaterways_4.readFeatures(json_AllWaterways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllWaterways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllWaterways_4.addFeatures(features_AllWaterways_4);
var lyr_AllWaterways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllWaterways_4, 
                style: style_AllWaterways_4,
                popuplayertitle: 'All Waterways',
                interactive: true,
                title: '<img src="styles/legend/AllWaterways_4.png" /> All Waterways'
            });
var format_MajorRivers_5 = new ol.format.GeoJSON();
var features_MajorRivers_5 = format_MajorRivers_5.readFeatures(json_MajorRivers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRivers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRivers_5.addFeatures(features_MajorRivers_5);
var lyr_MajorRivers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRivers_5, 
                style: style_MajorRivers_5,
                popuplayertitle: 'Major Rivers',
                interactive: true,
                title: '<img src="styles/legend/MajorRivers_5.png" /> Major Rivers'
            });
var format_Mouth_6 = new ol.format.GeoJSON();
var features_Mouth_6 = format_Mouth_6.readFeatures(json_Mouth_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mouth_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mouth_6.addFeatures(features_Mouth_6);
var lyr_Mouth_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mouth_6, 
                style: style_Mouth_6,
                popuplayertitle: 'Mouth',
                interactive: true,
                title: '<img src="styles/legend/Mouth_6.png" /> Mouth'
            });
var format_Source_7 = new ol.format.GeoJSON();
var features_Source_7 = format_Source_7.readFeatures(json_Source_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Source_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Source_7.addFeatures(features_Source_7);
var lyr_Source_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Source_7, 
                style: style_Source_7,
                popuplayertitle: 'Source',
                interactive: true,
                title: '<img src="styles/legend/Source_7.png" /> Source'
            });

lyr_Topography_0.setVisible(true);lyr_StreetLayer_1.setVisible(true);lyr_VenetoRegionBasinBoundaries_2.setVisible(false);lyr_VeniceLagoonBoundaries_3.setVisible(true);lyr_AllWaterways_4.setVisible(true);lyr_MajorRivers_5.setVisible(true);lyr_Mouth_6.setVisible(true);lyr_Source_7.setVisible(true);
var layersList = [lyr_Topography_0,lyr_StreetLayer_1,lyr_VenetoRegionBasinBoundaries_2,lyr_VeniceLagoonBoundaries_3,lyr_AllWaterways_4,lyr_MajorRivers_5,lyr_Mouth_6,lyr_Source_7];
lyr_VenetoRegionBasinBoundaries_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'c_bac_rid': 'c_bac_rid', 'c_bac_tot': 'c_bac_tot', 'c_pch_tot': 'c_pch_tot', 'Region': 'Region', 'foce_fluv': 'foce_fluv', 'af_lag_dir': 'af_lag_dir', 'area_km2': 'area_km2', 'Primary River Basin': 'Primary River Basin', 'Secondary River Basin': 'Secondary River Basin', 'Tertiary River Basin': 'Tertiary River Basin', 'd_bac_liv4': 'd_bac_liv4', 'd_bac_liv5': 'd_bac_liv5', 'd_bac_liv6': 'd_bac_liv6', 'd_bac_liv7': 'd_bac_liv7', 'd_bac_liv8': 'd_bac_liv8', 'd_bac_liv9': 'd_bac_liv9', });
lyr_VeniceLagoonBoundaries_3.set('fieldAliases', {'nome': 'nome', 'sup_ha': 'sup_ha', 'signific': 'signific', 'objectid': 'objectid', 'hydroid': 'hydroid', 'junctionid': 'junctionid', 'natura': 'natura', 'shape_area': 'shape_area', 'shape_len': 'shape_len', });
lyr_AllWaterways_4.set('fieldAliases', {'fid': 'fid', 'hydroid': 'hydroid', 'Waterway Type': 'Waterway Type', 'Waterway Name': 'Waterway Name', 'legenda': 'legenda', 'nome_pta': 'nome_pta', 'codice_pta': 'codice_pta', 'cod_t_elem': 'cod_t_elem', 'cod_t_ramo': 'cod_t_ramo', 'navigabile': 'navigabile', 'tipo_elem': 'tipo_elem', 'tipo_ramo': 'tipo_ramo', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_MajorRivers_5.set('fieldAliases', {'fid': 'fid', 'hydroid': 'hydroid', 'Waterway Type': 'Waterway Type', 'Waterway Name': 'Waterway Name', 'legenda': 'legenda', 'nome_pta': 'nome_pta', 'codice_pta': 'codice_pta', 'cod_t_elem': 'cod_t_elem', 'cod_t_ramo': 'cod_t_ramo', 'navigabile': 'navigabile', 'tipo_elem': 'tipo_elem', 'tipo_ramo': 'tipo_ramo', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'layer': 'layer', 'path': 'path', });
lyr_Mouth_6.set('fieldAliases', {'fid': 'fid', 'hydroid': 'hydroid', });
lyr_Source_7.set('fieldAliases', {'fid': 'fid', 'hydroidnod': 'hydroidnod', 'cod_t_nodo': 'cod_t_nodo', 'desc_nodo': 'desc_nodo', 'layer': 'layer', 'path': 'path', });
lyr_VenetoRegionBasinBoundaries_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'c_bac_rid': 'TextEdit', 'c_bac_tot': 'TextEdit', 'c_pch_tot': 'TextEdit', 'Region': 'TextEdit', 'foce_fluv': 'TextEdit', 'af_lag_dir': 'TextEdit', 'area_km2': 'TextEdit', 'Primary River Basin': 'TextEdit', 'Secondary River Basin': 'TextEdit', 'Tertiary River Basin': 'TextEdit', 'd_bac_liv4': 'TextEdit', 'd_bac_liv5': 'TextEdit', 'd_bac_liv6': 'TextEdit', 'd_bac_liv7': 'TextEdit', 'd_bac_liv8': 'TextEdit', 'd_bac_liv9': 'TextEdit', });
lyr_VeniceLagoonBoundaries_3.set('fieldImages', {'nome': 'TextEdit', 'sup_ha': 'TextEdit', 'signific': 'TextEdit', 'objectid': 'TextEdit', 'hydroid': 'TextEdit', 'junctionid': 'TextEdit', 'natura': 'Range', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', });
lyr_AllWaterways_4.set('fieldImages', {'fid': 'TextEdit', 'hydroid': 'TextEdit', 'Waterway Type': 'TextEdit', 'Waterway Name': 'TextEdit', 'legenda': 'TextEdit', 'nome_pta': 'TextEdit', 'codice_pta': 'Range', 'cod_t_elem': 'Range', 'cod_t_ramo': 'Range', 'navigabile': 'TextEdit', 'tipo_elem': 'TextEdit', 'tipo_ramo': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_MajorRivers_5.set('fieldImages', {'fid': 'TextEdit', 'hydroid': 'TextEdit', 'Waterway Type': 'TextEdit', 'Waterway Name': 'TextEdit', 'legenda': 'TextEdit', 'nome_pta': 'TextEdit', 'codice_pta': 'Range', 'cod_t_elem': 'Range', 'cod_t_ramo': 'Range', 'navigabile': 'TextEdit', 'tipo_elem': 'TextEdit', 'tipo_ramo': 'TextEdit', 'auxiliary_storage_labeling_show': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Mouth_6.set('fieldImages', {'fid': '', 'hydroid': '', });
lyr_Source_7.set('fieldImages', {'fid': '', 'hydroidnod': '', 'cod_t_nodo': '', 'desc_nodo': '', 'layer': '', 'path': '', });
lyr_VenetoRegionBasinBoundaries_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'c_bac_rid': 'hidden field', 'c_bac_tot': 'hidden field', 'c_pch_tot': 'hidden field', 'Region': 'header label - always visible', 'foce_fluv': 'hidden field', 'af_lag_dir': 'hidden field', 'area_km2': 'hidden field', 'Primary River Basin': 'inline label - visible with data', 'Secondary River Basin': 'inline label - visible with data', 'Tertiary River Basin': 'inline label - visible with data', 'd_bac_liv4': 'hidden field', 'd_bac_liv5': 'hidden field', 'd_bac_liv6': 'hidden field', 'd_bac_liv7': 'hidden field', 'd_bac_liv8': 'hidden field', 'd_bac_liv9': 'hidden field', });
lyr_VeniceLagoonBoundaries_3.set('fieldLabels', {'nome': 'hidden field', 'sup_ha': 'hidden field', 'signific': 'hidden field', 'objectid': 'hidden field', 'hydroid': 'hidden field', 'junctionid': 'hidden field', 'natura': 'hidden field', 'shape_area': 'hidden field', 'shape_len': 'hidden field', });
lyr_AllWaterways_4.set('fieldLabels', {'fid': 'hidden field', 'hydroid': 'hidden field', 'Waterway Type': 'header label - always visible', 'Waterway Name': 'header label - always visible', 'legenda': 'hidden field', 'nome_pta': 'hidden field', 'codice_pta': 'hidden field', 'cod_t_elem': 'hidden field', 'cod_t_ramo': 'hidden field', 'navigabile': 'hidden field', 'tipo_elem': 'hidden field', 'tipo_ramo': 'hidden field', });
lyr_MajorRivers_5.set('fieldLabels', {'fid': 'hidden field', 'hydroid': 'hidden field', 'Waterway Type': 'header label - always visible', 'Waterway Name': 'header label - always visible', 'legenda': 'hidden field', 'nome_pta': 'hidden field', 'codice_pta': 'hidden field', 'cod_t_elem': 'hidden field', 'cod_t_ramo': 'hidden field', 'navigabile': 'hidden field', 'tipo_elem': 'hidden field', 'tipo_ramo': 'hidden field', 'auxiliary_storage_labeling_show': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Mouth_6.set('fieldLabels', {'fid': 'hidden field', 'hydroid': 'hidden field', });
lyr_Source_7.set('fieldLabels', {'fid': 'hidden field', 'hydroidnod': 'hidden field', 'cod_t_nodo': 'hidden field', 'desc_nodo': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Source_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});