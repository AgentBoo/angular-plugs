import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs';
import { environment } from '../../environments/environment';
import { appID } from '../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {
	isFetching = new Subject<string>()

  constructor(private http: HttpClient) { }

  private buildURL(location){
  	return `${environment.apiURL}?q=${location}&type=like&sort=population&${appID}`
  }

  retrieveLocation(location){
  	const url = this.buildURL(location)
  	return this.http.get(url)
  }

  doneFetching(status){
  	this.isFetching.next(status)
  }
}
