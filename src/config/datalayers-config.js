const dataLayers = [
  {
    "menu-title": "Depth Layer",
    "active": true,
    "mapbox-layers": [
      {
          "id": "right-hand-corrected-2-26vezl",
          "type": "fill",
          "source": {
            "url": "mapbox://vandermark.00f06cef",
            "type": "vector"
          },
          "source-layer": "right-hand-corrected-2-26vezl",
          "maxzoom": 11,
          "minzoom": 20,
          "layout": {},
          // "paint": {
          //     "fill-color": [
          //         "interpolate",
          //         ["linear"],
          //         ["get", "Bodemveran"],
          //         -2,
          //         "hsl(246, 100%, 48%)",
          //         0,
          //         "hsl(0, 95%, 100%)",
          //         2,
          //         "hsl(0, 100%, 50%)"
          //     ]
          // }
      },
    ]
  }
]

export {
  dataLayers
}
