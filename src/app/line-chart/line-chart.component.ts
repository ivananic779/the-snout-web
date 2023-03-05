import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { HelperService } from '../services/helper.service';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  zgKvartoviData: any[];
  view: [number, number] = [1200, 800];
  showingAll: Boolean = false;

  opcije: any = [
    { name: 'jedno', code: 'jednomjesecni' },
    { name: 'tro', code: 'tromjsecni' },
    { name: 'polu', code: 'polugodisnji' },
    { name: 'godi', code: 'godisnji' }
  ];

  odabranaOpcija: any;
  showAllCharts = false;

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'date';
  yAxisLabel: string = 'price';
  timeline: boolean = true;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor(
    public helperService: HelperService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.helperService.currentAvailableSeries = this.helperService.currentGraph[0].availableSeries;
    if (this.showingAll) {
      this.view = [700, 400];
    } else {
      this.view = [1200, 800];
    }
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  test($event: any): void {
    this.helperService.currentAvailableSeries.forEach(series => {
      if (series.name == $event.value.code) {
        this.helperService.currentGraph[0].series = series.series;
        this.cd.detectChanges();
      }
    });

    this.helperService.currentGraph = [...this.helperService.currentGraph];

    console.log(this.helperService.currentGraph);
  }

  prvaIfAllCharts1(): void {
    this.helperService.currentGraph = this.helperService.currentGraph[0].availableSeries;
    this.helperService.currentGraph = [... this.helperService.currentGraph];
  }

  drugaIfAllCharts() {
    this.helperService.currentGraph[0].availableSeries[0].series = this.helperService.currentGraph;
    console.log("drugi klik proso");
  }

  IfLogikaAllCharts() {
    this.showingAll = !this.showingAll;

    if (this.showingAll) {
      this.helperService.currentGraph[0] = this.helperService.currentAvailableSeries[0];
      this.helperService.currentGraph2[0] = this.helperService.currentAvailableSeries[1];
      this.helperService.currentGraph3[0] = this.helperService.currentAvailableSeries[2];
      this.helperService.currentGraph4[0] = this.helperService.currentAvailableSeries[3];
    } else {
      this.helperService.currentGraph[0] = this.helperService.currentAvailableSeries[0];
    }
  }
}



