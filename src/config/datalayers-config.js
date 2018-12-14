const dataLayers = [{
  "menu-title": "Referentie",
  "active": true,
  "barlegend": "background: linear-gradient(to right, rgb(140,81,10), rgb(246,232,195) 25%, rgb(199,234,229) 38%, rgb(0,60,48));",
  "bartext": "0 4 8",
  "mapbox-layers": [{
    "id": "ref",
    "type": "fill",
    "source": {
      "url": "mapbox://vandermark.8nmjjhd8",
      "type": "vector"
    },
    "source-layer": "dep_OLR_combined_rh-81gyyf",
    "layout": {},
    "paint": {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "1 ref"],
        -999,
        "rgba(0, 0, 0, 0)",
        0,
        "rgb(140,81,10)",
        2,
        "rgb(246,232,195)",
        3,
        "rgb(199,234,229)",
        8,
        "rgb(0,60,48)"
      ]
    }
  }]
},
{
  "menu-title": "2050",
  "active": false,
  "mapbox-layers": [{
    "id": "2050",
    "type": "fill",
    "source": {
      "url": "mapbox://vandermark.8nmjjhd8",
      "type": "vector"
    },
    "source-layer": "dep_OLR_combined_rh-81gyyf",
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "2 2050WH"],
        -999,
        "rgba(0, 0, 0, 0)",
        0,
        "rgb(140,81,10)",
        2,
        "rgb(246,232,195)",
        3,
        "rgb(199,234,229)",
        8,
        "rgb(0,60,48)"
      ]
    }
  }]
},
{
  "menu-title": "2085",
  "active": false,
  "mapbox-layers": [{
    "id": "2085",
    "type": "fill",
    "source": {
      "url": "mapbox://vandermark.8nmjjhd8",
      "type": "vector"
    },
    "source-layer": "dep_OLR_combined_rh-81gyyf",
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "2 2085WH"],
        -999,
        "rgba(0, 0, 0, 0)",
        0,
        "rgb(140,81,10)",
        2,
        "rgb(246,232,195)",
        3,
        "rgb(199,234,229)",
        8,
        "rgb(0,60,48)"
      ]
    }
  }]
}
]

const diffLayers = [{
  "menu-title": "2050",
  "active": false,
  "barlegend": "background: linear-gradient(to left, rgb(0, 104, 55), rgb(217, 239, 139) 51%, rgb(222, 222, 222) 50%, rgb(254, 224, 139) 51%, rgb(165, 0, 38));",
  "bartext": "-2 0 2",
  "mapbox-layers": [{
    "id": "verschil-2050",
    "type": "fill",
    "source": {
      "url": "mapbox://vandermark.4neu6lb4",
      "type": "vector"
    },
    "source-layer": "diff_OLR_combined_rh-dy88f6",
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "2 2050WH"],
        -2,
        "rgb(165, 0, 38)",
        -0.01,
        "rgb(254, 224, 139)",
        0,
        "rgb(222, 222, 222)",
        0.01,
        "rgb(217, 239, 139)",
        2,
        "rgb(0, 104, 55)",
      ]
    }
  }]
},
{
  "menu-title": "2085",
  "active": false,
  "barlegend": "background: linear-gradient(to left, rgb(0, 104, 55), rgb(217, 239, 139) 51%, rgb(222, 222, 222) 50%, rgb(254, 224, 139) 51%, rgb(165, 0, 38));",
  "bartext": "-2 0 2",
  "mapbox-layers": [{
    "id": "verschil-2085",
    "type": "fill",
    "source": {
      "url": "mapbox://vandermark.4neu6lb4",
      "type": "vector"
    },
    "source-layer": "diff_OLR_combined_rh-dy88f6",
    "layout": {
        "visibility": "none"
    },
    "paint": {
      "fill-color": [
        "interpolate",
        ["linear"],
        ["get", "2 2050WH"],
        -2,
        "rgb(165, 0, 38)",
        -0.01,
        "rgb(254, 224, 139)",
        0,
        "rgb(222, 222, 222)",
        0.01,
        "rgb(217, 239, 139)",
        2,
        "rgb(0, 104, 55)",
      ]
    }
  }]
}
]

export {
  dataLayers,
  diffLayers
}
