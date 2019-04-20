import { Component, OnInit } from '@angular/core';
import data from "../../../assets/sockets.json"

// imported json will be resolved to a JS data structure, 
// so there is no need to call JSON.parse(), see 
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
// https://stackblitz.com/edit/json-import-example 
// https://www.reddit.com/r/Angular2/comments/9phvw1/pro_tip_with_angular_7_you_can_import_json_files/

@Component({
  selector: 'app-plug-reference',
  templateUrl: './plug-reference.component.html',
  styleUrls: ['./plug-reference.component.scss']
})
export class PlugReferenceComponent implements OnInit {
	sockets = data

  constructor() { }

  get socketsByCountry(){
  	return Object.keys(this.sockets).map(country => this.sockets[country])
  }

  ngOnInit() {
  }

}
