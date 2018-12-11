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

<script src="./map-component.js">
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';

#map {
  width: 100%;
  height: 100%;
}
</style>
