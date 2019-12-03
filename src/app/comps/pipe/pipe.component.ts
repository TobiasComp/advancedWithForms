import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  birthYearArray:number[] = [90,2019,89,2000];
  stringArray:string[] = ['hello','everybody','this','is','Avratech']
  constructor() { }

  ngOnInit() {
  }

}
