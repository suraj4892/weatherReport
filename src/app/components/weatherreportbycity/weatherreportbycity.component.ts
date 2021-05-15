import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { listModel } from 'src/app/models/list.model';
import { WeatherDetailModel } from 'src/app/models/weatherdetail.model';
import { WeatherService } from '../../services/weatherservice.service';

@Component({
  selector: 'app-weatherreportbycity',
  templateUrl: './weatherreportbycity.component.html',
  styleUrls: ['./weatherreportbycity.component.scss']
})
export class WeatherreportbycityComponent implements OnInit {

  public subscription = new Subscription();
  public id : number;
  public name :string;
  public city?:string;
  public filterData:listModel<any>[]=[]
  constructor(public activatedroute: ActivatedRoute,
              public weatherService:WeatherService) {}

  ngOnInit(): void {
    this.city = this.activatedroute.snapshot.params.city
    this.getWeatherDetail()
  }

  async getWeatherDetail(){
    const data:WeatherDetailModel<any> = await this.weatherService.getWeatherDetails(this.city).toPromise()
    console.log('data',data)
    if(data){
      const Filterdata:listModel<any>[] = data.list.filter(x=>x.dt_txt.substring(11) =='09:00:00')
      this.filterData = Filterdata
    }
  }
}