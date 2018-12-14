<template>
  <div>
    <v-dialog v-model="disclaimer" persistent scrollable width="50vw"  max-width="40vw">
      <v-card light>
        <v-card-title>
          <span class="headline">
            Disclaimer
          </span>
        </v-card-title>
        <v-card-text>
          Welkom bij het “signaleringsinstrument voor het hoofdvaarwegennetwerk”, versie 0.01. Dit instrument wordt ontwikkeld door Rijkswaterstaat en Deltares in het kader van Klimaatbestendige Netwerken. Op dit moment is het instrument nog in ontwikkeling, en bevat deze viewer kaarten van de vaardiepte bij OLR onder verschillende klimaatscenario’s voor een deel van het hoofdvaarwegennet. Aan de beelden kunnen geen rechten worden ontleend.
        </v-card-text>
        <v-card-actions class="text-xs-center">
          <v-btn @click.stop="disclaimer=false" round color="primary" dark>Accepteer en naar website</v-btn>
          <!-- <v-btn tutorialDialog=true" round color="primary" dark>Decline</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      disclaimer: true
    }
  }
}
</script>

<style>
.v-dialog, v-dialog {
  min-width: 300px !important;
}
</style>
