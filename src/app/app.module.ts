import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ContainerComponent } from './container/container.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NaviAreaComponent } from './navi-area/navi-area.component';
import { DoughnutChartComponent } from './container/doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import { SatelliteListComponent } from './container/satellite-list/satellite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NaviAreaComponent,
    DoughnutChartComponent,
    SatelliteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    ChartsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
