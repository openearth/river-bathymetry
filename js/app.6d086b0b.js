(function(e){function t(t){for(var n,o,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)o=l[u],r[o]&&p.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/rivier-signaleringskaarten/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("1356"),r=a.n(n);r.a},1356:function(e,t,a){},"26cc":function(e,t,a){e.exports=a.p+"img/Rijkswaterstaat.ef136223.svg"},3497:function(e,t,a){"use strict";var n=a("64bd"),r=a.n(n);r.a},"393a":function(e,t,a){"use strict";var n=a("d15b"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{id:"navdrawer","hide-overlay":"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("menu-component")],1),a("v-toolbar",{attrs:{height:"64px",fixed:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Klimaatbestendigheid hoofdvaarwegennetwerk: signaleringskaarten")])],1),a("map-component")],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"map"}},[a("v-mapbox",{ref:"map",attrs:{"access-token":"pk.eyJ1IjoidmFuZGVybWFyayIsImEiOiJjanBpNWZ4cWsxM3VzM2twNWh5OWRyaGxmIn0.ysVnnlTLH7YinSkixdKzGw","map-style":"mapbox://styles/mapbox/light-v9",center:[5.873,51.861],zoom:12.79,pitch:0,bearing:0,"min-zoom":11,"max-zoom":20,id:"map"}})],1)},s=[],c=(a("ac6a"),a("e192")),d=a.n(c),u={name:"map-component",data:function(){return{map:null}},components:{},mounted:function(){var e=this;this.map=this.$refs.map.map,this.$store.commit("setMap",this.map),this.map.on("load",function(){e.map.addControl(new d.a.NavigationControl),e.$store.state.referenceLayer.forEach(function(t){t["mapbox-layers"].forEach(function(t){e.map.addLayer(t)})}),console.log(e.$store.state.dataLayers),e.$store.state.dataLayers.forEach(function(t){t["mapbox-layers"].forEach(function(t){e.map.addLayer(t)})}),e.$store.state.diffLayers.forEach(function(t){t["mapbox-layers"].forEach(function(t){e.map.addLayer(t)})})})}},p=u,f=(a("393a"),a("2877")),m=Object(f["a"])(p,l,s,!1,null,null,null);m.options.__file="MapComponent.vue";var b=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"menu"}},[e._l(e.menulayers,function(t){return n("div",{key:t.title},[n("v-expansion-panel",{staticClass:"v-diepte",attrs:{expand:""},model:{value:t.expanded,callback:function(a){e.$set(t,"expanded",a)},expression:"menulayer.expanded"}},[n("v-expansion-panel-content",[n("v-toolbar",{staticClass:"toolbar",attrs:{slot:"header",dense:"",flat:"",color:"grey lighten-4"},slot:"header"},[n("v-toolbar-title",[e._v("\n            "+e._s(t.title)+"\n          ")])],1),n("v-card",{attrs:{small:"",id:"layer-card"}},["dataLayers"===t.datalayername||"diffLayers"===t.datalayername?n("div",{staticClass:"scenario-selector"},[n("v-select",{attrs:{items:e.scenarios,"item-text":"name","item-value":"name",label:"Scenario","return-object":""},on:{change:function(a){e.selectScenario(t.datalayername)}},model:{value:t.selected,callback:function(a){e.$set(t,"selected",a)},expression:"menulayer.selected"}},[e._v("\n            >")])],1):e._e(),e.$store.state.legends[t.datalayername].barlegend?n("div",{staticClass:"bar-wrapper"},[n("div",{staticClass:"bar",style:e.$store.state.legends[t.datalayername].barlegend}),n("div",{staticClass:"bartext"},[e._v(e._s(e.$store.state.legends[t.datalayername].bartext)+" ")])]):e._e(),e._l(e.$store.state[t.datalayername],function(a){return n("v-list",{key:a["menu-title"],attrs:{"three-line":""}},[n("v-list-tile",[n("v-list-tile-avatar",[n("v-switch",{on:{change:function(a){e.toggleLayers(t.datalayername)}},model:{value:a.active,callback:function(t){e.$set(a,"active",t)},expression:"datalayer.active"}})],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"px-3"},[e._v("\n                  "+e._s(a["menu-title"])+"\n                ")]),n("v-list-tile-sub-title",{staticClass:"px-3"},[n("v-slider",{staticClass:"pl-3 ma-0",attrs:{"hide-details":""},on:{input:function(t){e.setOpacity(a["mapbox-layers"].map(function(e){return e.id}),a.opacity)}},model:{value:a.opacity,callback:function(t){e.$set(a,"opacity",t)},expression:"datalayer.opacity"}}),e._v("\n                  Transparantie\n                ")],1)],1)],1)],1)})],2)],1)],1)],1)}),n("v-expansion-panel",{staticClass:"v-colofon",attrs:{expand:""},model:{value:e.colofon,callback:function(t){e.colofon=t},expression:"colofon"}},[n("v-expansion-panel-content",[n("v-toolbar",{staticClass:"toolbar",attrs:{slot:"header",dense:"",flat:"",color:"grey lighten-4"},slot:"header"},[n("v-toolbar-title",[e._v("\n          Colofon\n        ")])],1),n("v-card",{attrs:{small:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("p",[e._v("\n            Dit instrument wordt ontwikkeld door Rijkswaterstaat en Deltares in het kader van Klimaatbestendige Netwerken. Op dit moment is het instrument nog in ontwikkeling, en bevat deze viewer kaarten van de vaardiepte bij OLR onder verschillende klimaatscenario’s voor een deel van het hoofdvaarwegennet. Aan de beelden kunnen geen rechten worden ontleend.\n          "),n("br"),n("br"),e._v("\n            Voor meer informatie over deze viewer kunt u terecht bij Milou Wolters (Rijkswaterstaat) of Rolien van der Mark (Deltares).\n            Meer informatie over Klimaatbestendige Netwerken is te verkrijgen bij Angela Vlaar (Rijkswaterstaat) of Gerda Lenselink (Deltares).\n          ")]),n("div",{attrs:{id:"logos"}},[n("img",{staticClass:"logos",attrs:{src:a("26cc")}}),n("img",{staticClass:"logos",attrs:{src:a("f051")}})])])],1)],1)],1)],2)},v=[],g={name:"map-component",data:function(){return{map:null,scenarios:[{name:"Scenario 2, WH",id:"2",condition:"WH"},{name:"Scenario 2, WH dry",id:"2",condition:"WHd"},{name:"Scenario 3, WH",id:"3",condition:"WH"},{name:"Scenario 3, WH dry",id:"3",condition:"WHd"},{name:"Scenario 4a, WH",id:"4a",condition:"WH"},{name:"Scenario 4a, WH dry",id:"4a",condition:"WHd"},{name:"Scenario 4b, WH",id:"4b",condition:"WH"},{name:"Scenario 4b, WH dry",id:"4b",condition:"WHd"},{name:"Scenario 5a, WH",id:"5a",condition:"WH"},{name:"Scenario 5a, WH dry",id:"5a",condition:"WHd"},{name:"Scenario 5b, WH",id:"5b",condition:"WH"},{name:"Scenario 5b, WH dry",id:"5b",condition:"WHd"}],years:["2050","2085"],colofon:[!0],menulayers:[{title:"Referentie Laag",datalayername:"referenceLayer",selected:"",expanded:[!0]},{title:"Dieptelagen",datalayername:"dataLayers",selected:"",expanded:[!1]},{title:"Verschil lagen",datalayername:"diffLayers",selected:"",expanded:[!1]}]}},components:{},mounted:function(){var e=this;this.menulayers.forEach(function(t){t.selected=e.scenarios[0]})},methods:{toggleLayers:function(e){var t=this;if(null!==this.$store.state.map){var a=["none","visible"];this.$store.state[e].forEach(function(e){e["mapbox-layers"].forEach(function(n){void 0!==t.$store.state.map.getLayer(n.id)&&(e.active?t.$store.state.map.setLayoutProperty(n.id,"visibility",a[1]):t.$store.state.map.setLayoutProperty(n.id,"visibility",a[0]))})})}},setOpacity:function(e,t){var a=this;e.forEach(function(e){a.$store.state.map.setPaintProperty(e,"fill-opacity",parseInt(t)/100)})},selectScenario:function(e){var t=this;"dataLayers"===e?this.years.forEach(function(e){t.$store.state.map.setPaintProperty(e,"fill-color",["interpolate",["linear"],["get","".concat(t.menulayers[1].selected.id," ").concat(e).concat(t.menulayers[1].selected.condition)],-999,"rgba(0, 0, 0, 0)",0,"rgb(213, 52, 79)",4,"rgb(255, 255, 191)",8,"rgb(50, 136, 189)"])}):"diffLayers"===e&&this.years.forEach(function(e){t.$store.state.map.setPaintProperty("verschil-".concat(e),"fill-color",["interpolate",["linear"],["get","".concat(t.menulayers[2].selected.id," ").concat(e).concat(t.menulayers[2].selected.condition)],-2,"rgb(165, 0, 38)",-.01,"rgb(254, 224, 139)",0,"rgb(222, 222, 222)",.01,"rgb(217, 239, 139)",2,"rgb(0, 104, 55)"])})}}},h=g,x=(a("3497"),a("6544")),_=a.n(x),L=a("b0af"),k=a("12b2"),w=a("cd55"),W=a("49e2"),$=a("8860"),H=a("ba95"),S=a("c954"),V=a("5d23"),j=a("b56d"),O=a("ba0d"),C=a("b73d"),T=a("71d9"),E=a("2a7f"),P=Object(f["a"])(h,y,v,!1,null,null,null);P.options.__file="MenuComponent.vue";var R=P.exports;_()(P,{VCard:L["a"],VCardTitle:k["a"],VExpansionPanel:w["a"],VExpansionPanelContent:W["a"],VList:$["a"],VListTile:H["a"],VListTileAvatar:S["a"],VListTileContent:V["a"],VListTileSubTitle:V["b"],VListTileTitle:V["c"],VSelect:j["a"],VSlider:O["a"],VSwitch:C["a"],VToolbar:T["a"],VToolbarTitle:E["a"]});var M={referenceLayer:{barlegend:"background: linear-gradient(to left, rgb(50, 136, 189), rgb(255, 255, 191), rgb(213, 52, 79));",bartext:"0 4 8"},dataLayers:{barlegend:"background: linear-gradient(to left, rgb(50, 136, 189), rgb(255, 255, 191), rgb(213, 52, 79));",bartext:"0 4 8"},diffLayers:{barlegend:"background: linear-gradient(to left, rgb(0, 104, 55), rgb(217, 239, 139) 51%, rgb(222, 222, 222) 50%, rgb(254, 224, 139) 51%, rgb(165, 0, 38));",bartext:"-2 0 2"}},D=[{"menu-title":"Referentie",active:!0,opacity:100,"mapbox-layers":[{id:"ref",type:"fill",source:{url:"mapbox://vandermark.2myujnu2",type:"vector"},"source-layer":"dep_OLR_combined_v2_rh-ax4e9u",layout:{},paint:{"fill-color":["interpolate",["linear"],["get","1 ref"],-999,"rgba(0, 0, 0, 0)",0,"rgb(213, 52, 79)",4,"rgb(255, 255, 191)",8,"rgb(50, 136, 189)"]}}]}],z=[{"menu-title":"2050",active:!1,opacity:100,"mapbox-layers":[{id:"2050",type:"fill",source:{url:"mapbox://vandermark.2myujnu2",type:"vector"},"source-layer":"dep_OLR_combined_v2_rh-ax4e9u",layout:{visibility:"none"},paint:{"fill-color":["interpolate",["linear"],["get","1 ref"],-999,"rgba(0, 0, 0, 0)",0,"rgb(213, 52, 79)",4,"rgb(255, 255, 191)",8,"rgb(50, 136, 189)"]}}]},{"menu-title":"2085",active:!1,opacity:100,"mapbox-layers":[{id:"2085",type:"fill",source:{url:"mapbox://vandermark.2myujnu2",type:"vector"},"source-layer":"dep_OLR_combined_v2_rh-ax4e9u",layout:{visibility:"none"},paint:{"fill-color":["interpolate",["linear"],["get","1 ref"],-999,"rgba(0, 0, 0, 0)",0,"rgb(213, 52, 79)",4,"rgb(255, 255, 191)",8,"rgb(50, 136, 189)"]}}]}],A=[{"menu-title":"2050",active:!1,opacity:100,"mapbox-layers":[{id:"verschil-2050",type:"fill",source:{url:"mapbox://vandermark.55lg37fx",type:"vector"},"source-layer":"diff_OLR_combined_v2_rh-8ena4t",layout:{visibility:"none"},paint:{"fill-color":["interpolate",["linear"],["get","2 2050WH"],-2,"rgb(165, 0, 38)",-.01,"rgb(254, 224, 139)",0,"rgb(222, 222, 222)",.01,"rgb(217, 239, 139)",2,"rgb(0, 104, 55)"]}}]},{"menu-title":"2085",active:!1,opacity:100,"mapbox-layers":[{id:"verschil-2085",type:"fill",source:{url:"mapbox://vandermark.55lg37fx",type:"vector"},"source-layer":"diff_OLR_combined_v2_rh-8ena4t",layout:{visibility:"none"},paint:{"fill-color":["interpolate",["linear"],["get","2 2050WH"],-2,"rgb(165, 0, 38)",-.01,"rgb(254, 224, 139)",0,"rgb(222, 222, 222)",.01,"rgb(217, 239, 139)",2,"rgb(0, 104, 55)"]}}]}],I={name:"App",components:{"map-component":b,"menu-component":R,"disclaimer-component":R},data:function(){return{drawer:!0}},mounted:function(){this.$store.commit("setDataLayers",z),this.$store.commit("setDiffLayers",A),this.$store.commit("setReferenceLayer",D),this.$store.commit("setLegends",M)},methods:{}},N=I,G=(a("034f"),a("7496")),J=a("f774"),K=a("706c"),F=Object(f["a"])(N,i,o,!1,null,null,null);F.options.__file="App.vue";var Z=F.exports;_()(F,{VApp:G["a"],VNavigationDrawer:J["a"],VToolbar:T["a"],VToolbarSideIcon:K["a"],VToolbarTitle:E["a"]});var B=a("2f62");n["a"].use(B["a"]);var Y=new B["a"].Store({state:{map:null,dataLayers:[],legends:{referenceLayer:{barlegend:"",bartext:""},dataLayers:{barlegend:"",bartext:""},diffLayers:{barlegend:"",bartext:""}}},mutations:{setMap:function(e,t){t.resize(),e.map=t},setDataLayers:function(e,t){e.dataLayers=t},setDiffLayers:function(e,t){e.diffLayers=t},setLegends:function(e,t){e.legends=t},setReferenceLayer:function(e,t){e.referenceLayer=t}},actions:{}}),q=a("bd47"),Q=a.n(q);n["a"].use(Q.a),n["a"].config.productionTip=!1,new n["a"]({store:Y,render:function(e){return e(Z)}}).$mount("#app")},"64bd":function(e,t,a){},d15b:function(e,t,a){},f051:function(e,t,a){e.exports=a.p+"img/deltares.c91d7934.svg"}});
//# sourceMappingURL=app.6d086b0b.js.map