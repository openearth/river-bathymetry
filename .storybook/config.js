import "vuetify/dist/vuetify.css";
import 'storybook-chromatic';


import { configure } from "@storybook/vue";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from 'vuex'
import store from '../src/store'

import MenuComponent from '../src/components/MenuComponent.vue'
import MapComponent from '../src/components/MapComponent.vue'
import App from '../src/App.vue'

import Vue2MapboxGL from 'vue2mapbox-gl'
// Register custom components.
Vue.component('app', App)
Vue.component('map-component', MapComponent)
Vue.component('menu-component', MenuComponent)

Vue.use(Vuex)
Vue.use(Vue2MapboxGL)

Vue.use(Vuetify, {
  iconfont: 'md'
})

const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  require("../stories")
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
