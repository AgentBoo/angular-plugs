import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PlugCheckerService } from "../../services/plug-checker.service";
import { environment } from "../../../environments/environment";

// This regex does not cover the case `{cityName}, `
const regex = /^([a-zA-Z]+\s?)+[\,]?[a-zA-Z\s]?([a-zA-Z]+\s?)*$/;
const longestLocationName = environment.maxCity.length + environment.maxCountry.length

@Component({
  selector: "app-location-form",
  templateUrl: "./location-form.component.html",
  styleUrls: ["./location-form.component.scss"]
})
export class LocationFormComponent implements OnInit {
  cityForm = new FormGroup({
    city: new FormControl("", [
      Validators.required,
      Validators.pattern(regex),
      Validators.maxLength(longestLocationName),
    ])
  });

  isChecking = false 
  
  constructor(private checker: PlugCheckerService) { 
    this.checker.isChecking.subscribe(checking => this.isChecking = checking)
  }

  ngOnInit() {
  }

  get city() {
    return this.cityForm.get("city");
  }

  onSubmit(): void {
    this.checker.determineCompatibility(this.city.value);
  }

}
