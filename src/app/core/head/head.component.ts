import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  title: string;
  logo: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Marta Roldán';
    this.logo = '../../../assets/logo_angular.svg';
  }

}
