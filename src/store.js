import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: null,
    dataLayers: [],
    legends: {
      dataLayers: {
        'barlegend': '',
        'bartext': ''
      },
      diffLayers: {
        'barlegend': '',
        'bartext': ''
      }
    }
  },
  mutations: {
    setMap (state, map) {
      map.resize()
      state.map = map
    },
    setDataLayers (state, dataLayers) {
      state.dataLayers = dataLayers
    },
    setDiffLayers (state, diffLayers) {
      state.diffLayers = diffLayers
    },
    setLegends (state, legends) {
      state.legends = legends
    }
  },
  actions: {

  }
})
