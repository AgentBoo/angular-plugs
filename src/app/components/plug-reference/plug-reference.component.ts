import { Component, OnInit } from '@angular/core';
import sockets from "../../../assets/sockets.json"

// for importing json files, see 
// https://www.reddit.com/r/Angular2/comments/9phvw1/pro_tip_with_angular_7_you_can_import_json_files/

@Component({
  selector: 'app-plug-reference',
  templateUrl: './plug-reference.component.html',
  styleUrls: ['./plug-reference.component.scss']
})
export class PlugReferenceComponent implements OnInit {
	socketsByCountry = sockets 

  constructor() { }

  ngOnInit() {
  }

}
