<template>
  <v-app>
    <v-navigation-drawer id="navdrawer" app v-model="drawer">
      <v-switch label="Depth Layer" v-model="depthSwitch">
      </v-switch>
    </v-navigation-drawer>
    <v-toolbar id="toolbar" xs6 color="grey lighten-4" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>River Bathymetry</v-toolbar-title>
    </v-toolbar>
   </div>
    <map-component>
    </map-component>
  </v-app>
</template>

<script>
import MapComponent from './components/MapComponent'

export default {
  name: 'App',
  components: {
    'map-component': MapComponent
  },
  data () {
    return {
      drawer: true,
      depthSwitch: true
    }
  },
  watch: {
    depthSwitch: {
      handler: function(depthSwitch){
        if (depthSwitch){
          this.map.setLayoutProperty('depth', 'visibility', 'visible');
        } else {
          this.map.setLayoutProperty('depth', 'visibility', 'none');
        }
      }
    }
  }
}
</script>

<style>
html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
