import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlugCheckerService } from '../../services/plug-checker.service';

// `city, ` case is left out on purpose
const re = /^([a-zA-Z]+\s?)+[\,]?[a-zA-Z\s]?([a-zA-Z]+\s?)*$/

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {
  cityForm = new FormGroup({
		city: new FormControl('', [
			Validators.required,
			Validators.maxLength(68), 
			Validators.pattern(re)
		])
	})

  constructor(private plugChecker: PlugCheckerService) { }

  get city(){
    return this.cityForm.get('city')
  }

  ngOnInit() {
  }

  onSubmit(): void{
    this.plugChecker.setMessage(this.city.value)
  }

}
