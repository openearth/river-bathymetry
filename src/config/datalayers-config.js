const dataLayers = [{
  "menu-title": "Reference",
  "active": true,
  "barlegend": "background: linear-gradient(to left, rgb(1, 102, 94), rgb(245, 245, 245), rgb(140, 81, 10));",
  "bartext": "0 2.5 5",
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
        "rgb(140, 81, 10)",
        2.5,
        "rgb(245, 245, 245)",
        5,
        "rgb(1, 102, 94)"
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
        "rgb(140, 81, 10)",
        2.5,
        "rgb(245, 245, 245)",
        5,
        "rgb(1, 102, 94)"
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
        "rgb(140, 81, 10)",
        2.5,
        "rgb(245, 245, 245)",
        5,
        "rgb(1, 102, 94)"
      ]
    }
  }]
}
]

const diffLayers = [{
  "menu-title": "2050",
  "active": false,
  "barlegend": "background: linear-gradient(to left, rgb(215, 25, 28), rgb(255, 255, 189), rgb(44, 121, 181));",
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
        "rgb(44, 121, 181)",
        0,
        "rgb(255, 255, 189)",
        2,
        "rgb(215, 25, 28)",
      ]
    }
  }]
},
{
  "menu-title": "2085",
  "active": false,
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
        "rgb(44, 121, 181)",
        0,
        "rgb(255, 255, 189)",
        2,
        "rgb(215, 25, 28)",
      ]
    }
  }]
}
]

export {
  dataLayers,
  diffLayers
}
