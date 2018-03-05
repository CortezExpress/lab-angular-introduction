import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pictures: Array<Object> = [
    {
      src: "assets/images/picture.png",
      description: 'picture 1'
    }, {
      src: "assets/images/picture.png",
      description: 'picture 1 again',      
    }, {
      src: "assets/images/picture.png",
      description: 'picture 1 a third time',     
    }
  ];
}
