<template>
  <v-app>
    <v-navigation-drawer id="navdrawer" hide-overlay app v-model="drawer">
      <menu-component>
      </menu-component>
    </v-navigation-drawer>
    <v-toolbar height="64px" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Klimaatbestendigheid hoofdvaarwegennetwerk: signaleringskaarten</v-toolbar-title>
    </v-toolbar>
    <map-component>
    </map-component>
  </v-app>
</template>

<script src="./app.js">
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

#navdrawer {
  top: 64px;
  z-index: 1;
  overflow-y: overlay;
  max-height: calc(100% - 64px);
  width: 20vw !important;
  min-width: 300px !important;
}

</style>
