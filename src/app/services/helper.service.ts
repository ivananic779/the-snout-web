import { Injectable, OnInit } from '@angular/core';
import * as geojson from 'geojson';
import { zgKvartovi } from '../vars/zagreb_kvartovi';
import { zgKvartoviData } from '../vars_data/zagreb_kvartovi_data';


@Injectable({
  providedIn: 'root'
})
export class HelperService implements OnInit{

  visible: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

  kurac: any[] = [];








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





}




