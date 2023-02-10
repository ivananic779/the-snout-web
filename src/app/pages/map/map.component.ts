import { HtmlParser } from '@angular/compiler';
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HelperService } from 'src/app/services/helper.service';
import { zgKvartovi } from 'src/app/vars/zagreb_kvartovi'; '../../vars/zagreb_kvartovi'
import { zgKvartoviData } from 'src/app/vars_data/zagreb_kvartovi_data';
import { TooltipContent } from '../../klase/tooltip';
import { varijableEvenataMape } from '../../klase/varijableEvenataMape';
import { DialogService } from 'primeng/dynamicdialog';
import { LineChartComponent } from '../../line-chart/line-chart.component';







export class PathOptions {
  stroke?: boolean | undefined;
  color?: string | undefined;
  weight?: number | undefined;
  opacity?: number | undefined;
  dashArray?: string | number[] | undefined;
  dashOffset?: string | undefined;
  fill?: boolean | undefined;
  fillColor?: string | undefined;
  fillOpacity?: number | undefined;
  className?: string | undefined;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    './map.component.scss'

  ]
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map | L.LayerGroup<any>;

  constructor(
    public helperService: HelperService, private dialogService: DialogService
  ) { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private stylePolygon($kvart: any): PathOptions {
    let color =
      $kvart.properties.price_per_sqm > 3000 ? '#800026' :
        $kvart.properties.price_per_sqm > 2500 ? '#BD0026' :
          $kvart.properties.price_per_sqm > 2000 ? '#E31A1C' :
            $kvart.properties.price_per_sqm > 1500 ? '#FC4E2A' :
              $kvart.properties.price_per_sqm > 1000 ? '#FD8D3C' :
                $kvart.properties.price_per_sqm > 500 ? '#FEB24C' :
                  $kvart.properties.price_per_sqm > 0 ? '#FED976' :
                    '#FFEDA0';

    let pathOptionsObj: PathOptions = {
      fillColor: color,
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.4
    };

    return pathOptionsObj;
  }




  private initMap(): void {
    this.map = L.map('map', {
      center: [45.815399, 15.966568],
      zoom: 13,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 13,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://hr.linkedin.com/in/ivan-ani%C4%87-9a0b27182?trk=people-guest_people_search-card">Ivan Anić</a>; <a href="https://hr.linkedin.com/in/matija-%C5%A1iljeg-5a610a20b">Matija Šiljeg</a>'
    });

    zgKvartovi.features.forEach((kvart: any) => {
      zgKvartoviData.forEach((kvartData: any) => {
        if (kvart.properties.name == kvartData.name) {
          kvart.properties.series = kvartData.series;
          kvart.properties.series2 = kvartData.series2
        }
      });

    });

    const chartConfig = {
      data: {},
      xKey: 'name',
      yKey: 'value',
      groupBy: 'name',
      seriesName: 'series'
    };

    zgKvartovi.features.forEach((kvart: any) => {
      if (kvart.properties.series === undefined) {
      } else {
        var title = kvart.properties.name;
        var row1 = kvart.properties.series[kvart.properties.series.length - 1].value;
        var row2 = kvart.properties.series[kvart.properties.series.length - 1].count;
        var content = new TooltipContent(title, row1, row2);
        L.polygon(kvart.geometry.coordinates[0], this.stylePolygon(kvart)).bindTooltip(content.napraviHTML(), {
          permanent: false,
          direction: 'right',
          sticky: true,
          offset: [0, 0],
          opacity: 0.8,
          className: 'leaflet-tooltip-own',
          properties: kvart.properties
        }).on('click', (event: any) => {
          this.helperService.visible = true;
          this.helperService.kurac = [];
          
          
          chartConfig.data = event.target._tooltip.options.properties;
          this.helperService.kurac.push(chartConfig.data);

        }).addTo(this.map);
      }
    });

    tiles.addTo(this.map);
  }


}


