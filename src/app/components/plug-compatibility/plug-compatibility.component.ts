import { Component, OnInit } from '@angular/core';
import { PlugCheckerService } from '../../services/plug-checker.service';

@Component({
  selector: 'app-plug-compatibility',
  templateUrl: './plug-compatibility.component.html',
  styleUrls: ['./plug-compatibility.component.scss']
})
export class PlugCompatibilityComponent implements OnInit {
  searchResults: any[] = []
  warning: string = ''
	successResult = "You don't need an adapter"
	failureResult = "You will need an adapter"

  constructor(private checker: PlugCheckerService) { 
    this.checker.warning.subscribe((warning: any) => {
      this.warning = warning
    })
    this.checker.results.subscribe((results: any[]) => {
      this.searchResults = results
    })
  }

  ngOnInit() {
  }

}
