import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    //----- Animations -----//
    trigger('slideInLeft', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('1000ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),

    trigger('slideInRight', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('1000ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
  ]
})
export class HomePageComponent implements OnInit {

  public englishTitle = 'Hello | '
  public japaneseTitle = ' | 你好'

  constructor() { }

  ngOnInit(): void {
  }

}
