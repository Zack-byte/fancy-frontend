import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public navIcon = 'fa-bars';
  public showNav = false;

  constructor() { }

  ngOnInit(): void {
  }

  public switchIcons(): void {
    if(this.navIcon == 'fa-bars'){
      this.navIcon = 'fa-times'
      this.showNav = true
    }
    else {
      this.navIcon = 'fa-bars'
      this.showNav = false
    }
  }

}
