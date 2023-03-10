import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AccordionModule} from 'primeng/accordion';  
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {DialogModule} from 'primeng/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/map.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { zgKvartoviData } from './vars_data/zagreb_kvartovi_data';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LineChartComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    AccordionModule,
    DynamicDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule




    
    
  ],
  providers: [DialogService,
    { provide: 'data', useValue: zgKvartoviData }],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
