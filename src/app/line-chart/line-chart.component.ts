import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { HelperService } from '../services/helper.service';
import { TooltipContent } from '../klase/tooltip';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  zgKvartoviData: any[];
  view: [number, number] = [700, 300];

  opcije: any = [
    { name: 'jedno', code: 'jednomjesecni' },
    { name: 'tro', code: 'tromjsecni' },
    { name: 'polu', code: 'polugodisnji' },
    { name: 'godi', code: 'godisnji' }
  ];

  odabranaOpcija: any;

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
    Object.assign(this, this.helperService.kurac);
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
    this.helperService.kurac[0].availableSeries.forEach(series => {
      if (series.name == $event.value.code) {
        this.helperService.kurac[0].series = series.series;
        this.cd.detectChanges();
      }
    });

    this.helperService.kurac = [...this.helperService.kurac];

    console.log(this.helperService.kurac);
  }

}
