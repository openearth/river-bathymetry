import MapComponent from './components/MapComponent'
import MenuComponent from './components/MenuComponent'
import store from './store'

import {
  dataLayers,
  diffLayers,
  legends
} from './config/datalayers-config.js'

export default {
  name: 'App',
  store,
  components: {
    'map-component': MapComponent,
    'menu-component': MenuComponent
  },
  data () {
    return {
      drawer: true
    }
  },
  mounted () {
    store.commit('setDataLayers', dataLayers)
    store.commit('setDiffLayers', diffLayers)
    store.commit('setLegends', legends)
  },
  methods: {
  }
}
