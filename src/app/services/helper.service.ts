import { Injectable } from '@angular/core';
import * as geojson from 'geojson';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public flipCoordinates($geo_json_object: geojson.FeatureCollection) {
    // Flip long and lat
    $geo_json_object.features.forEach((kvart: any) => {
      kvart["geometry"]["coordinates"][0].forEach((coo: any) => {
        let helper = coo[0];
        coo[0] = coo[1]
        coo[1] = helper;
      });
    });
  }

  public style($feature: any) {
    let color =
      $feature.properties.price_per_sqm > 3000 ? '#800026' :
        $feature.properties.price_per_sqm > 2500 ? '#BD0026' :
          $feature.properties.price_per_sqm > 2000 ? '#E31A1C' :
            $feature.properties.price_per_sqm > 1500 ? '#FC4E2A' :
              $feature.properties.price_per_sqm > 1000 ? '#FD8D3C' :
                $feature.properties.price_per_sqm > 500 ? '#FEB24C' :
                  $feature.properties.price_per_sqm > 0 ? '#FED976' :
                    '#FFEDA0';

    let test = {
      fillColor: color,
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.6
    };

    return test;
  }
}
