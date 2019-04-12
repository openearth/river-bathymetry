<template>
  <div id="menu">
    <div v-for="menulayer in menulayers" :key="menulayer.title">
      <v-expansion-panel class="v-diepte" expand>
        <v-expansion-panel-content>
          <v-toolbar class="toolbar" dense flat slot="header" color="grey lighten-4">
            <v-toolbar-title>
              {{menulayer.title}}
            </v-toolbar-title>
          </v-toolbar>
          <v-card small id='layer-card'>
            <v-select
              v-model="menulayer.selected"
              :items="scenarios"
              item-text="name"
              item-value="name"
              label="Scenario"
              return-object
              v-on:change="selectScenario(menulayer.datalayername)">
            ></v-select>
            <div v-if='$store.state.legends[menulayer.datalayername].barlegend' class='bar-wrapper'>
              <div :style='$store.state.legends[menulayer.datalayername].barlegend' class='bar'></div>
              <div class='bartext'>{{$store.state.legends[menulayer.datalayername].bartext}} </div>
            </div>
            <v-list v-for="datalayer in $store.state[menulayer.datalayername]" :key="datalayer['menu-title']" three-line>
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-switch
                    v-model="datalayer.active"
                    v-on:change="toggleLayers(menulayer.datalayername)">
                  </v-switch>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title class="px-3">
                    {{datalayer['menu-title']}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title class="px-3">
                    <v-slider
                      hide-details
                      class="pl-3 ma-0"
                      v-model="datalayer.opacity"
                      v-on:input="setOpacity(datalayer['mapbox-layers'].map(x => x.id), datalayer.opacity)">
                    </v-slider>
                    Transparantie {{datalayer.opacity}}%
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    <v-expansion-panel class="v-colofon" v-model="colofon" expand>
      <v-expansion-panel-content>
        <v-toolbar class="toolbar" dense flat slot="header" color="grey lighten-4">
          <v-toolbar-title>
            Colofon
          </v-toolbar-title>
        </v-toolbar>
        <v-card small>
          <v-card-title primary-title>
            <p>
              Dit instrument wordt ontwikkeld door Rijkswaterstaat en Deltares in het kader van Klimaatbestendige Netwerken. Op dit moment is het instrument nog in ontwikkeling, en bevat deze viewer kaarten van de vaardiepte bij OLR onder verschillende klimaatscenario’s voor een deel van het hoofdvaarwegennet. Aan de beelden kunnen geen rechten worden ontleend.
            </p>
            <p>
              Voor meer informatie over deze viewer kunt u terecht bij Milou Wolters (Rijkswaterstaat) of Rolien van der Mark (Deltares).
              Voor meer informatie over Klimaatbestendige Netwerken is te verkrijgen bij Angela Vlaar (Rijkswaterstaat) of Gerda Lenselink (Deltares).
            </p>
            <div id="logos">
              <img class="logos" src="../../static/images/Rijkswaterstaat.svg">
              <img class="logos" src="../../static/images/deltares.svg">
            </div>
          </v-card-title>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script src="./menu-component.js">
</script>

<style>
@import '~mapbox-gl/dist/mapbox-gl.css';
#map {
  width: 100%;
  height: 100%;
}
.bar {
  width: 100%;
  height: 10px;
}
.barwrapper {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.bartext {
  width: 100%;
  display: inline-block;
  text-align: justify;
  text-align-last: justify
}
pre {
  white-space: pre-wrap;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
}
.logos {
  width: 50%;
  height: auto;
}

#layer-card {
  padding: 0 20px 0 20px;
}

.v-expansion-panel__header {
  background-color: #F5F5F5;
}

.toolbar {
  padding: 0;
}

</style>
