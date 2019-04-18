import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	source = "World Standards"
	sourceURL = "https://www.worldstandards.eu/electricity/plug-voltage-by-country/"

  constructor() { }

  ngOnInit() {
  }

}
