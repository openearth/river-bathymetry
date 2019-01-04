import mapboxgl from 'mapbox-gl'
export default {
  name: 'map-component',
  data: () => {
    return {
      map: null
    }
  },
  components: {},
  mounted () {
    this.map = this.$refs.map.map
    this.$store.commit('setMap', this.map)

    // wait for the map to load
    this.map.on('load', () => {
      this.map.addControl(new mapboxgl.NavigationControl())

      this.$store.state.referenceLayer.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })
      console.log(this.$store.state.dataLayers)
      this.$store.state.dataLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })
      this.$store.state.diffLayers.forEach((layer) => {
        layer['mapbox-layers'].forEach((maplayer) => {
          this.map.addLayer(maplayer)
        })
      })
    })
  }
}
