import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import VanillaTilt from 'vanilla-tilt';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    //----- Animations -----//
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}

}
