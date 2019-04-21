import { Component, OnInit } from '@angular/core';
import { PlugCheckerService } from '../../services/plug-checker.service';

@Component({
  selector: 'app-plug-compatibility',
  templateUrl: './plug-compatibility.component.html',
  styleUrls: ['./plug-compatibility.component.scss']
})
export class PlugCompatibilityComponent implements OnInit {
  message = ''
	compatible = false
  searchResult = { types: ["A","B"] }
	successResult = "You don't need an adapter"
	failureResult = "You will need an adapter"

  constructor(private checker: PlugCheckerService) { 
    this.checker.message.subscribe(message => this.message = message)
    this.checker.codes.subscribe(codes => console.log(codes))
  }

  get productURL(): string{
    const plugType = this.searchResult.types[0]
  	return `https://www.amazon.com/s?k=type+{plugType}+adapter&i=electronics`
  }

  ngOnInit() {
  }

}
