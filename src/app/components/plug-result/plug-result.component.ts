import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plug-result',
  templateUrl: './plug-result.component.html',
  styleUrls: ['./plug-result.component.scss']
})
export class PlugResultComponent implements OnInit {
	compatible = false
	success = "You don't need an adapter"
	failure = "You will need an adapter"
	productURL = "https://www.amazon.com/s?k=type+c+adapter&i=electronics&ref=nb_sb_noss_2"

  constructor() { }

  ngOnInit() {
  }

}
