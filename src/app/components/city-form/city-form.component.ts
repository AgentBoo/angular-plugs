import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlugCheckerService } from '../../services/plug-checker.service';

// `Paris, ` case is left out on purpose
const re = /^([a-zA-Z]+\s?)+[\,]?[a-zA-Z\s]?([a-zA-Z]+\s?)*$/

function sanitize(value: string): string{
  return value.replace(',', '').trim()
}

function transform(words: string): [string, string|undefined]{
  let filtered = words.split(',').filter(word => word.length > 0)
  let [city, country] = filtered.map(word => sanitize(word))
  return [city, country] 
} 

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {
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
  	transform(this.city.value)
    this.plugChecker.setMessage(this.city.value)
  }
}