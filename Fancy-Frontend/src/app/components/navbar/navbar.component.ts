import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import * as $ from 'jquery';

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
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-page").scrollTop
    }, 2000);
    this.resetButtons();
    $("#home").css("background-color", "rgb(8, 40, 158)");
    $("#home").children().css("color", "white");
    $('#home').css("box-shadow", "inset 1px 1px 10px #333")
  }

  public goToAbout(): void {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-page").scrollTop
    }, 2000);
    this.resetButtons();
    $("#about").css("background-color", "rgb(8, 40, 158)");
    $("#about").children().css("color", "white");
    $('#about').css("box-shadow", "inset 1px 1px 10px #333")
  }

  public goToProjects(): void {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-page").scrollTop
    }, 2000);
    this.resetButtons();
    $("#projects").css("background-color", "rgb(8, 40, 158)");
    $("#projects").children().css("color", "white");
    $('#projects').css("box-shadow", "inset 1px 1px 10px #333")
  }

  public goToContact(): void {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home-page").scrollTop
    }, 2000);
    this.resetButtons();
    $("#contact").css("background-color", "rgb(8, 40, 158)");
    $("#contact").children().css("color", "white");
    $('#contact').css("box-shadow", "inset 1px 1px 10px #333")
  }

  public toggleNavbar(): void {
    this.showNav = !this.showNav;
  }

  public resetButtons(): void {
    $('.nav-button').css("background-color", "white");
    $('.nav-button').children().css("color", "rgb(8, 40, 158)");
    $('.nav-button').css("box-shadow", "none")
  }
}
