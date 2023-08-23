import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-servicios',
  templateUrl: './td-servicios.component.html',
  styleUrls: ['./td-servicios.component.css']
})
export class TdServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  scrollUp(){
    window.scroll(0,0);
  }

}
