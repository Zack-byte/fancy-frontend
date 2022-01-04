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
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({opacity: 0}))
      ])
    ])


  ]
})
export class NavbarComponent implements OnInit {
  public showNav = false;
  public status = 'Enable';

  constructor() { }

  ngOnInit(): void {
  }


  public goToHome(): void {
    console.log('gone home');
  }

  public goToAbout(): void {
    console.log('gone to about');
  }

  public goToProjects(): void {
    console.log('gone to projects');
  }

  public toggleNavbar(): void {
    this.showNav = !this.showNav;
  }
}
