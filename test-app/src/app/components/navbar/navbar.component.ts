import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    //----- Animations -----//
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('400ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])

  ]
})
export class NavbarComponent implements OnInit {
  public toggle = true;
  public status = 'Enable';
  public navIcon = 'fa-bars';

  constructor() { }

  ngOnInit(): void {
  }

  public switchIcons(): void {
    this.toggle = !this.toggle;
    
    if( this.navIcon === 'fa-bars'){
      this.navIcon = 'fa-times'
    }
    else {
      this.navIcon = 'fa-bars'
    }
  }

}
