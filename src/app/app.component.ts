import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  texto : string = "Título";
  
  isVisable : boolean = true;


  constructor() {
    setTimeout(() => {
      this.isVisable = false;
    }, 1000);
  }

}
