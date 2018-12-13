<template>
  <div id="menu">
    <div id="layers">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Dieptelagen
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
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
    </div>
    <div id="differences">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Verschil Lagen
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
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
    </div>
    <div id="logos">
      <v-expansion-panel>
        <div slot="header">Information</div>
        <v-card>
          <v-card-text>For more information contact </v-card-text>
        </v-card>
        <img class="logos" src="../../static/images/Rijkswaterstaat.svg">
        <img class="logos" src="../../static/images/deltares.svg">
      </v-expansion-panel>
    </div>
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
.logos {
  width: 50%;
  height: auto;
}
</style>
