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



  displayData: boolean = false;
  changeData2() {
    if (!this.displayData) {
      let temp: any = [];
      temp = this.helperService.kurac[0].series
      this.helperService.kurac[0].series = this.helperService.kurac[0].series2
      this.helperService.kurac[0].series2 = temp
      this.helperService.kurac = [...this.helperService.kurac];
      this.cd.detectChanges();
      this.displayData = true;
    }
  }
  changeData1() {
    if (this.displayData) {
      let temp: any = [];
      temp = this.helperService.kurac[0].series2;
      this.helperService.kurac[0].series2 = this.helperService.kurac[0].series;
      this.helperService.kurac[0].series = temp;
      this.helperService.kurac = [...this.helperService.kurac];
      this.cd.detectChanges();
      this.displayData = false;
    }
  }
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

}
