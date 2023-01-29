import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { zgKvartovi } from 'src/app/vars/zagreb_kvartovi'; '../../vars/zagreb_kvartovi'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map | L.LayerGroup<any>;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.815399, 15.966568],
      zoom: 13,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://hr.linkedin.com/in/ivan-ani%C4%87-9a0b27182?trk=people-guest_people_search-card">Ivan Anić</a>'
    });

    // Flip long and lat
    zgKvartovi.features.forEach((kvart: any) => {
      kvart["geometry"]["coordinates"][0].forEach((coo: any) => {
        let helper = coo[0];
        coo[0] = coo[1]
        coo[1] = helper;
      });
    });

    L.geoJson(zgKvartovi).addTo(this.map);

    tiles.addTo(this.map);
  }
}