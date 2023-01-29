import * as geojson from 'geojson';

export var zgKvartovi: geojson.FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            "type": "Feature",
            "id": "01",
            "properties": {
                "name": "Blato",
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [45.738994335351805, 15.878717684045805],
                        [45.76664743616479, 15.946206590361019],
                        [45.76791754037971, 15.935160744169718],
                        [45.769968083882354, 15.93368543510692],
                        [45.759092545209896, 15.89951070559818],
                        [45.754252002252876, 15.890025152526357],
                        [45.74851078178504, 15.883745952010797]
                    ]
                ]
            }
        },
    ]
};
