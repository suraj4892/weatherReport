import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weatherservice.service';
import { CountryModel } from '../../models/country.model';

@Component({
  selector: 'app-weathercountrylist',
  templateUrl: './weathercountrylist.component.html',
  styleUrls: ['./weathercountrylist.component.scss']
})
export class WeathercountrylistComponent implements OnInit {

  constructor(public weatherService: WeatherService) { }

  public countryDetails: CountryModel[];

  ngOnInit(): void {
    this.retrieveCountryList();
  }

  public async retrieveCountryList() {
    let countryDeatils: CountryModel[] = await this.weatherService.getCountryList().toPromise();
    if (countryDeatils != null) {
      this.countryDetails = countryDeatils;
    }
  }

}


