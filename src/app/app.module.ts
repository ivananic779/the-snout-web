import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AccordionModule} from 'primeng/accordion';  
import {MenuItem} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/map.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LineChartComponent,
    DialogComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    AccordionModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
