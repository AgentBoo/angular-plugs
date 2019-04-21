import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { appID } from '../../environments/environment.local';

/**
 * Location API Service 
 * Uses OpenWeatherMap to retrieve a list of cities by city name 
 * OpenWeatherMap recommends '{city},{2-letter country code}' location query format 
 * However, it is acceptable to use both 'london,uk' and 'london,united+kingdom' formats  
 * More information at https://openweathermap.org/current
 */

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {

  constructor(private http: HttpClient) { }

  private buildURL(location: string): string{
  	return `${environment.apiURL}?q=${location}&type=like&sort=population&${appID}`
  }

  retrieveLocation(location: string){
  	const url = this.buildURL(location)
  	return this.http.get(url)
  }

}
