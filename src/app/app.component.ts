import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @Input() textOne = "Parashuram";
  @Input() textOneColor = "";
  @Input() textOneSize = "5";
  @Input() textOneCustomClass = "";

  @Input() textTwo = "Live Your Design";
  
}
