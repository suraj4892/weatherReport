import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeathercountrylistComponent } from './components/weathercountrylist/weathercountrylist.component';
import { WeatherreportbycityComponent } from './components/weatherreportbycity/weatherreportbycity.component';


const routes: Routes = [
  {
    path: '',
    component: WeathercountrylistComponent,
  },
  {
    path: 'WeatherCountryList',
    component: WeathercountrylistComponent,
  },
  {
    path: 'WeatherReportCity/:city',
    component: WeatherreportbycityComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
