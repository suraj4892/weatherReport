import { Injectable } from '@angular/core';
import {Observable,throwError as observableThrowError } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CountryModel } from '../models/country.model';
import { WeatherDetailModel } from '../models/weatherdetail.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public httpClient: HttpClient){}
 
  public getWeatherDetails(city:string): Observable<WeatherDetailModel<any>> {
    return this.httpClient.get<WeatherDetailModel<any>>(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3d8b309701a13f65b660fa2c64cdc517&units=metric`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error)
        }))
  }

  public getCountryList(): Observable<CountryModel[]> {
    return this.httpClient.get<CountryModel[]>("assets/country.json")
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error)
        }))
  }


}

