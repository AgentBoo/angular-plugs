import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { appID } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {

  constructor(private http: HttpClient) { }

  buildURL(city){
  	return `${environment.apiURL}?q=${city}&${appID}`
  }

  retrieveLocation(city){
  	const url = this.buildURL(city)
  	return this.http.get(url)
  }
}
