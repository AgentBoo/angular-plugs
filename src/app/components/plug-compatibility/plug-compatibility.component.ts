import { Component, OnInit } from '@angular/core';
import { LocationApiService } from '../../services/location-api.service'

@Component({
  selector: 'app-plug-compatibility',
  templateUrl: './plug-compatibility.component.html',
  styleUrls: ['./plug-compatibility.component.scss']
})
export class PlugCompatibilityComponent implements OnInit {
	compatible = false
	successResult = "You don't need an adapter"
	failureResult = "You will need an adapter"

  constructor(private api: LocationApiService) { }

  get productURL(){
  	return "https://www.amazon.com/s?k=type+c+adapter&i=electronics&ref=nb_sb_noss_2"
  }

  ngOnInit() {
    this.api.retrieveLocation('London').subscribe(response => console.log(response.name, response.sys.country))
  }

}
