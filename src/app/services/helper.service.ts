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

  public setRandomDensity($geo_json_object: geojson.FeatureCollection) {
    $geo_json_object.features.forEach((kvart: any) => {
      kvart["properties"]["density"] = Math.floor(Math.random() * (1000 - 10 + 1) + 10);
    });
  }

  public style($feature: any) {
    let color =
      $feature.properties.density > 1000 ? '#800026' :
        $feature.properties.density > 500 ? '#BD0026' :
          $feature.properties.density > 200 ? '#E31A1C' :
            $feature.properties.density > 100 ? '#FC4E2A' :
              $feature.properties.density > 50 ? '#FD8D3C' :
                $feature.properties.density > 20 ? '#FEB24C' :
                  $feature.properties.density > 10 ? '#FED976' :
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
