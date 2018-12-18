import mapboxgl from 'mapbox-gl'
import store from '../store'

export default {
  name: 'map-component',
  store,
  data: () => {
    return {
      map: null
    }
  },
  components: {},
  mounted () {
    this.map = this.$refs.map.map
    store.commit('setMap', this.map)

    // wait for the map to load
    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.NavigationControl())

      console.log(store.state.dataLayers)
      store.state.dataLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })
      store.state.diffLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })
    })
  }
}
