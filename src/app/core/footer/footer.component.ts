import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;
  empresa: string;

  constructor() { }

  ngOnInit() {
    this.autor = 'Marta Roldán';
    this.empresa = 'KeepCoding';
  }

}