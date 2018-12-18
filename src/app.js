import MapComponent from './components/MapComponent'
import MenuComponent from './components/MenuComponent'
import DisclaimerComponent from './components/MenuComponent'
import {
  dataLayers,
  diffLayers,
  legends
} from './config/datalayers-config.js'

export default {
  name: 'App',
  components: {
    'map-component': MapComponent,
    'menu-component': MenuComponent,
    'disclaimer-component': DisclaimerComponent
  },
  data () {
    return {
      drawer: true
    }
  },
  mounted () {
    this.$store.commit('setDataLayers', dataLayers),
    this.$store.commit('setDiffLayers', diffLayers)
    this.$store.commit('setLegends', legends)
  },
  methods: {
  }
}
