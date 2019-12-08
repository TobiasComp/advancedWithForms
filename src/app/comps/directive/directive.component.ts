import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  tiktak:string
  constructor() { }

  ngOnInit() {
  }

  showTable(){
    let cells = document.querySelectorAll('.item');
    cells.forEach(cell => (cell as HTMLElement).style.visibility="visible");

    
  }
}
