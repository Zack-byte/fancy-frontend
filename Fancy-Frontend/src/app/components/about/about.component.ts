import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import VanillaTilt from 'vanilla-tilt';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    //----- Animations -----//
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}

}
