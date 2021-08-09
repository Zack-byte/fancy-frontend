import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public englishTitle = 'Welcome | '
  public japaneseTitle = ' | 歓迎'

  constructor() { }

  ngOnInit(): void {
  }

}
