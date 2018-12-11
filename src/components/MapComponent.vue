<template>
  <div id="map">
    <v-mapbox
      access-token="pk.eyJ1IjoidmFuZGVybWFyayIsImEiOiJjanBpNWZ4cWsxM3VzM2twNWh5OWRyaGxmIn0.ysVnnlTLH7YinSkixdKzGw"
      map-style="mapbox://styles/vandermark/cjpjlwv140axn2rrv4pk6j8gk"
      :center="[5.873, 51.861]"
      :zoom="12.79"
      :pitch="0"
      :bearing="0"
      id="map"
      ref="map"
      >
    </v-mapbox>
  </div>
</template>

<script>
export default {
  name: 'map-component',
  components: {
  },
  mounted() {
   this.map = this.$refs.map.map
   this.map.on('load', () => {
     this.map.addLayer({
       id: "depth",
       "source-layer": "right-hand-corrected-2-26vezl",
       source: {
         type: "fill",
         url: "mapbox://vandermark.00f06cef"
       },
       type: "fill"
     });
   })
 }
}
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  height: 100%;
}
</style>
