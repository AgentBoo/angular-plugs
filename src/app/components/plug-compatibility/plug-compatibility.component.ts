import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plug-compatibility',
  templateUrl: './plug-compatibility.component.html',
  styleUrls: ['./plug-compatibility.component.scss']
})
export class PlugCompatibilityComponent implements OnInit {
	compatible = false
	successResult = "You don't need an adapter"
	failureResult = "You will need an adapter"

  constructor() { }

  get productURL(){
  	return "https://www.amazon.com/s?k=type+c+adapter&i=electronics&ref=nb_sb_noss_2"
  }

  ngOnInit() {
  }

}
