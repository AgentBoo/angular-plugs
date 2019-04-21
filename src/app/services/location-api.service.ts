import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { appID } from '../../environments/environment.local';

/**
 * Location API Service 
 * Uses OpenWeatherMap to retrieve a list of cities by city name. 
 * OpenWeatherMap recommends '{city},{2-letter country code}' 
 * location query format. Other formats such as 'london,great+britain' 
 * will be resolved as well, but less accurately. More information 
 * can be found at https://openweathermap.org/current
 *
 * OpenWeatherMap server errors 
 * https://openweathermap.org/faq
 *
 * Handling API requests
 * https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html
 */

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {

  constructor(private http: HttpClient) { }
  
  private plusEncode(value: string): string{
    // plus encoding may or may not be ignored by HttpParams
    // https://github.com/angular/angular/issues/11058
    return value.trim().replace(',', '').replace(' ', '+')
  }

  private sanitize(text: string): string{
    let filtered = text.split(',').filter(word => word.length > 0)
    let sanitized = filtered.map(word => this.plusEncode(word))
    return sanitized.join(',')
  }

  private createParams(locationQuery: string): HttpParams{
    return new HttpParams().set('q', locationQuery).set('type', 'like').set('appid', appID)
  }

  retrieveLocation(formInput: string): Observable<[]>{
    const query = this.sanitize(formInput)
    const params = this.createParams(query)

  	return this.http.get(environment.apiURL, { params }).pipe(pluck('list'))
  }

}
