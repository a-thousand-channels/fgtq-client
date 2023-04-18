import Vue from 'vue'
import L from 'leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'

import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

Vue.component('l-marker-cluster', Vue2LeafletMarkerCluster)