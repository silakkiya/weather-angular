import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './component/summary/summary.component';
import { TemperatureComponent } from './component/temperature/temperature.component';
import { TpwComponent } from './component/tpw/tpw.component';
import { ChartComponent } from './component/chart/chart.component';
import { DaytileComponent } from './component/daytile/daytile.component';
// import { Summary } from './models/summary.ts/summary.ts.component';
// import { Temperature } from './models/temperature.ts/temperature.ts.component';
// import { Tpw } from './models/tpw.ts/tpw.ts.component';
// import { Chart } from './models/chart.ts/chart.ts.component';
// import { Daytile } from './models/daytile.ts/daytile.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TemperatureComponent,
    TpwComponent,
    ChartComponent,
    DaytileComponent,
    // Summary.TsComponent,
    // Temperature.TsComponent,
    // Tpw.TsComponent,
    // Chart.TsComponent,
    // Daytile.TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
