import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withActions } from '@storybook/addon-actions';

import MenuComponent from '../src/components/MenuComponent.vue'
import MapComponent from '../src/components/MapComponent.vue'
import App from '../src/App.vue'


storiesOf('App', module)
  .add('story as a component', () => ({
    components: { App },
    template: '<app></app>'
  }));

storiesOf('MenuComponent', module)
  .addDecorator(withActions('mouseover', 'click .btn'))
  .add('story as a component', () => ({
    components: { MenuComponent },
    template: '<menu-component></menu-component>'
  }));

storiesOf('MapComponent', module)
  .add('story as a component', () => ({
    components: { MapComponent },
    template: '<map-component></map-component>',
  }));
