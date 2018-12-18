import MapComponent from './components/MapComponent'
import MenuComponent from './components/MenuComponent'
import {
  dataLayers
} from './config/datalayers-config.js'

export default {
  name: 'App',
  components: {
    'map-component': MapComponent,
    'menu-component': MenuComponent
  },
  data () {
    return {
      drawer: true,
      depthSwitch: true
    }
  },
  mounted () {
    this.$store.commit('setDataLayers', dataLayers)
  },
  methods: {
  }
}
