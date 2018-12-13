<template>
  <v-app>
    <v-navigation-drawer id="navdrawer" app v-model="drawer">
      <menu-component>
      </menu-component>
    </v-navigation-drawer>
    <v-toolbar id="toolbar" xs6 color="grey lighten-4" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Dieptekaarten</v-toolbar-title>
    </v-toolbar>
   </div>
    <map-component>
    </map-component>
  </v-app>
</template>

<script src="./app.js">
</script>

<style>
#navdrawer {
  top: 64px;
}
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
