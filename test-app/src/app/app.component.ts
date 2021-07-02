import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private content: string;
  public query: string;  

  public constructor() {
    this.content = "blah blah blah your ass kid"; 
  }

  public highlight() {
    if(!this.query) {
      return this.content; 
    }

    return this.content.replace(new RegExp(this.query, "gi"), match =>{
      return '<span class="highlightText>' + match + '</span>'; 
    })
  }
}
