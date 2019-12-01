import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css']
})
export class SelectsComponent implements OnInit {
  person:Person
  countriesAndCities=[
    {country:"Israel",cities:['Jerusalem',"Tzfas","Bnei-Brak","Kiryat Sefer"]},
    {country:"USA",cities:['NY',"Lakewood","LA","Miami"]},
    {country:"England",cities:['London',"Manchester","Gateshead","Oxford"]},
    {country:"Russia",cities:['Moscow',"St. Petersberg","Kiev","Omsk"]}]
   citiesByCountries = []
  personFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      zipcode: new FormControl(''),
    }),
  })
  constructor() { }

  ngOnInit() {
  }

  setGroupForm(){
    let person = this.personFormGroup.value
    console.log(person);
  }
  getCountries(){
    return this.countriesAndCities.map(x => x.country );
  }
  getCities(country:string){
    this.citiesByCountries = this.countriesAndCities.find(x=>x.country==country).cities
    console.log(this.citiesByCountries);
    

  }
}

