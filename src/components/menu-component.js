export default {
  name: 'map-component',
  data: () => {
    return {
      map: null,
      scenarios: [
        { name: 'Scenario 2, WH', id: '2', condition: 'WH' },
        { name: 'Scenario 2, WH dry', id: '2', condition: 'WHd' },
        { name: 'Scenario 3, WH', id: '3', condition: 'WH' },
        { name: 'Scenario 3, WH dry', id: '3', condition: 'WHd' },
        { name: 'Scenario 4a, WH', id: '4a', condition: 'WH' },
        { name: 'Scenario 4a, WH dry', id: '4a', condition: 'WHd' },
        { name: 'Scenario 4b, WH', id: '4b', condition: 'WH' },
        { name: 'Scenario 4b, WH dry', id: '4b', condition: 'WHd' },
        { name: 'Scenario 5a, WH', id: '5a', condition: 'WH' },
        { name: 'Scenario 5a, WH dry', id: '5a', condition: 'WHd' },
        { name: 'Scenario 5b, WH', id: '5b', condition: 'WH' },
        { name: 'Scenario 5b, WH dry', id: '5b', condition: 'WHd' }
      ],
      selectedScenario: [{ name: '', id: '1', condition: 'ref' }],
      diffScenarios: [
        { name: 'Scenario 2, WH', id: '2', condition: 'WH' },
        { name: 'Scenario 2, WH dry', id: '2', condition: 'WHd' },
        { name: 'Scenario 3, WH', id: '3', condition: 'WH' },
        { name: 'Scenario 3, WH dry', id: '3', condition: 'WHd' },
        { name: 'Scenario 4a, WH', id: '4a', condition: 'WH' },
        { name: 'Scenario 4a, WH dry', id: '4a', condition: 'WHd' },
        { name: 'Scenario 4b, WH', id: '4b', condition: 'WH' },
        { name: 'Scenario 4b, WH dry', id: '4b', condition: 'WHd' },
        { name: 'Scenario 5a, WH', id: '5a', condition: 'WH' },
        { name: 'Scenario 5a, WH dry', id: '5a', condition: 'WHd' },
        { name: 'Scenario 5b, WH', id: '5b', condition: 'WH' },
        { name: 'Scenario 5b, WH dry', id: '5b', condition: 'WHd' }
      ],
      selectedDiffScenario: [{ name: '', id: '1', condition: 'ref' }],
      // selectedScenario: [{name:'Scneario2, WH', }],
      years: ['2050', '2085'],
      colofon: [true]
    }
  },
  components: {},
  mounted () {},
  methods: {
    selectScenario () {
      console.log('Scenario selected:', this.selectedScenario.id, this.selectedScenario.condition)
      this.years.forEach(year => {
        this.$store.state.map.setPaintProperty(year, 'fill-color', [
          'interpolate',
          ['linear'],
          ['get', `${this.selectedScenario.id} ${year}${this.selectedScenario.condition}`],
          -999,
          'rgba(0, 0, 0, 0)',
          0,
          'rgb(140,81,10)',
          2,
          'rgb(246,232,195)',
          3,
          'rgb(199,234,229)',
          8,
          'rgb(0,60,48)'
        ])
      })
    },
    toggleLayers () {
      console.log('toggling', this.$store.state.map, this.$store.state.dataLayers)
      if (this.$store.state.map === null) {
        return
      }
      // Function to toggle the visibility and opacity of the layers.
      var vis = ['none', 'visible']
      this.$store.state.dataLayers.forEach((layer) => {
        console.log(layer)
        layer['mapbox-layers'].forEach((sublayer) => {
          if (this.$store.state.map.getLayer(sublayer.id) !== undefined) {
            if (layer.active) {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[1])
            } else {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[0])
            }
          }
        })
      })
    },
    setOpacity (layer, sublayer) {
      if (layer.opacity) {
        try {
          var opacity = Math.max(layer.opacity * 0.01, 0.01)
          var property
          if (sublayer.type === 'fill') {
            property = 'fill-opacity'
          } else if (sublayer.type === 'line') {
            property = 'line-opacity'
          }
          if (property) {
            this.map.setPaintProperty(sublayer.id, property, opacity)
          }
        } catch (err) {
          console.log('error setting opacity: ' + opacity + '(' + err.message + ')')
        }
      }
    },
    selectDiffScenario () {
      console.log('Diff scenario selected:', this.selectedDiffScenario.id, this.selectedDiffScenario.condition)
      this.years.forEach(year => {
        this.$store.state.map.setPaintProperty(`verschil-${year}`, 'fill-color', [
          'interpolate',
          ['linear'],
          ['get', `${this.selectedDiffScenario.id} ${year}${this.selectedDiffScenario.condition}`],
          -2,
          'rgb(165, 0, 38)',
          -0.01,
          'rgb(254, 224, 139)',
          0,
          'rgb(222, 222, 222)',
          0.01,
          'rgb(217, 239, 139)',
          2,
          'rgb(0, 104, 55)'
        ])
      })
    },
    toggleDiffLayers () {
      console.log('toggling', this.$store.state.map, this.$store.state.diffLayers)
      if (this.$store.state.map === null) {
        return
      }
      // Function to toggle the visibility and opacity of the layers.
      var vis = ['none', 'visible']
      this.$store.state.diffLayers.forEach((layer) => {
        console.log(layer)
        layer['mapbox-layers'].forEach((sublayer) => {
          if (this.$store.state.map.getLayer(sublayer.id) !== undefined) {
            if (layer.active) {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[1])
            } else {
              this.$store.state.map.setLayoutProperty(sublayer.id, 'visibility', vis[0])
            }
          }
        })
      })
    }
  }
}
