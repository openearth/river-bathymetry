<template>
  <div id="menu">
    <div id="layers">
      <v-expansion-panel class="v-diepte" expand>
        <v-expansion-panel-content>
          <v-toolbar class="toolbar" dense flat slot="header" color="grey lighten-4">
            <v-toolbar-title>
              Dieptelagen
            </v-toolbar-title>
          </v-toolbar>
          <v-card small>
            <v-select
              v-model="selectedScenario"
              :items="scenarios"
              item-text="name"
              item-value="name"
              box
              label="Scenario"
              return-object
              v-on:change="selectScenario()">
            ></v-select>
            <v-list v-for="datalayer in $store.state.dataLayers" :key="datalayer['menu-title']">
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-switch
                    v-model="datalayer.active"
                    v-on:change="toggleLayers()">
                  </v-switch>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{datalayer['menu-title']}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    <div v-if='datalayer.barlegend' class='bar-wrapper'>
                      <div :style='datalayer.barlegend' class='bar'></div>
                      <div class='bartext'>{{datalayer.bartext}} </div>
                    </div>
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    <div id="differences">
      <v-expansion-panel class="v-verschil">
        <v-expansion-panel-content>
          <v-toolbar class="toolbar" dense flat slot="header" color="grey lighten-4">
            <v-toolbar-title>
              Verschil Lagen
            </v-toolbar-title>
          </v-toolbar>
          <v-card small>
            <v-select
              v-model="selectedDiffScenario"
              :items="diffScenarios"
              item-text="name"
              item-value="name"
              box
              label="Scenario"
              return-object
              v-on:change="selectDiffScenario()">
            ></v-select>
            <v-list v-for="difflayer in $store.state.diffLayers" :key="difflayer['menu-title']">
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-switch
                    v-model="difflayer.active"
                    v-on:change="toggleDiffLayers()">
                  </v-switch>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{difflayer['menu-title']}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    <div v-if='difflayer.barlegend' class='bar-wrapper'>
                      <div :style='difflayer.barlegend' class='bar'></div>
                      <div class='bartext'>{{difflayer.bartext}} </div>
                    </div>
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
            <pre>
              Voor meer informatie over deze viewer kunt u terecht bij Milou Wolters (<a href="https://www.rijkswaterstaat.nl/">Rijkswaterstaat</a>) of Rolien van der Mark (<a href="https://www.deltares.nl/nl/">Deltares</a>). Voor meer informatie over Klimaatbestendige Netwerken is te verkrijgen bij Angela Vlaar (<a href="https://www.rijkswaterstaat.nl/">Rijkswaterstaat</a>) of Gerda Lenselink (<a href="https://www.deltares.nl/nl/">Deltares</a>).
            </pre>
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
</style>
