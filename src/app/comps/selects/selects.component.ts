import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  //************** WITHOUT FORM BUILDER*****************
  // personFormGroup = new FormGroup({
  //   firstName: [''],
  //   lastName: new FormControl(''),
  //   age: new FormControl(''),
  //   address: new FormGroup({
  //       country: new FormControl(''),
  //       city: new FormControl(''),
  //       street: new FormControl(''),
  //       zipcode: new FormControl(''),
  //   }),
  // })

  //************ WITH FORM BUILDER**************** */
  personFormGroup =  this.fb.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      age:       ['', [Validators.required,Validators.min(18)] ],
      address: this.fb.group({
          country: [''],
          city:    [''],
          street:  [''],
          zipcode: [''],
      }),
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  setGroupForm(){
    let person = this.personFormGroup.value
    console.log(person);
    console.log(this.personFormGroup);
    console.log(this.personFormGroup.status);
  }

  getCountries(){
    return this.countriesAndCities.map(x => x.country );
  }

  getCities(country:string){
    this.citiesByCountries = this.countriesAndCities.find(x=>x.country==country).cities
    console.log(this.citiesByCountries);
    }
  }

