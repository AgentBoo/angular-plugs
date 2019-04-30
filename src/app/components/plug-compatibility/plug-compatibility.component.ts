import { Component, OnInit } from '@angular/core';
import { PlugCheckerService } from '../../services/plug-checker.service';
import { SocketResult } from '../../services/sockets.service'

@Component({
  selector: 'app-plug-compatibility',
  templateUrl: './plug-compatibility.component.html',
  styleUrls: ['./plug-compatibility.component.scss']
})
export class PlugCompatibilityComponent implements OnInit {
  displayedColumns: string[] = ['city', 'plug types', 'compatibility', 'result'];
  searchResults: SocketResult[] = []
  warning: string = ''
	successResult = "You don't need an adapter"
	failureResult = "You will need an adapter"

  constructor(private checker: PlugCheckerService) { 
    this.checker.warning.subscribe((warning: string) => {
      this.warning = warning
    })
    this.checker.results.subscribe((results: SocketResult[]) => {
      this.searchResults = results
    })
  }

  ngOnInit() {
  }

}
