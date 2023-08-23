import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-nosotros',
  templateUrl: './td-nosotros.component.html',
  styleUrls: ['./td-nosotros.component.css']
})
export class TdNosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  scrollUp() {
    window.scroll(0, 0);
  }

}
