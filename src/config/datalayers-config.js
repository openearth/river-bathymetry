const dataLayers = [{
  'menu-title': 'Depth Layer',
  'active': true,
  'mapbox-layers': [{
    'id': 'right-hand-corrected-2-26vezl',
    'type': 'fill',
    'source': {
      'url': 'mapbox://vandermark.00f06cef',
      'type': 'vector'
    },
    'source-layer': 'right-hand-corrected-2-26vezl',
    'layout': {},
    'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'Val_1'],
        -999,
        'hsla(0, 0%, 0%, 0)',
        0,
        'hsl(0, 100%, 49%)',
        1,
        'hsl(39, 100%, 52%)',
        2,
        'hsl(72, 100%, 48%)',
        3,
        'hsl(160, 100%, 44%)',
        4,
        'hsl(187, 100%, 44%)',
        5,
        'hsl(216, 100%, 44%)',
        6,
        'hsl(239, 100%, 44%)',
        7,
        'hsl(265, 100%, 44%)'
      ]
    }
  }]
}]

export {
  dataLayers
}
