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
      years: ['2050', '2085'],
      colofon: [true],
      menulayers: [{
        title: 'Dieptelagen',
        datalayername: 'dataLayers',
        selected: ''
      }, {
        title: 'Verschil lagen',
        datalayername: 'diffLayers',
        selected: ''
      }]
    }
  },
  components: {},
  mounted () {
    this.menulayers.forEach(x => {
      x.selected = this.scenarios[0]
    })
  },
  methods: {
    toggleLayers (layerType) {
      if (this.$store.state.map === null) {
        return
      }
      // Function to toggle the visibility and opacity of the layers.
      var vis = ['none', 'visible']
      this.$store.state[layerType].forEach((layer) => {
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
    setOpacity (ids, opacity) {
      ids.forEach(id => {
        this.$store.state.map.setPaintProperty(id, 'fill-opacity', parseInt(opacity) / 100)
      })
    },

    selectScenario (type) {
      if (type === 'dataLayers') {
        this.years.forEach(year => {
          this.$store.state.map.setPaintProperty(year, 'fill-color', [
            'interpolate',
            ['linear'],
            ['get', `${this.menulayers[0].selected.id} ${year}${this.menulayers[0].selected.condition}`],
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
      } else if (type === 'diffLayers') {
        this.years.forEach(year => {
          this.$store.state.map.setPaintProperty(`verschil-${year}`, 'fill-color', [
            'interpolate',
            ['linear'],
            ['get', `${this.menulayers[1].selected.id} ${year}${this.menulayers[1].selected.condition}`],
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
      }
    }
  }
}
