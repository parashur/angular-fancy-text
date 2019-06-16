import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <div class="test">
  <ng-content  select="#result"></ng-content>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }
  .test {
    font-size:50px;
    font-weight:800;
    }
  `]
})
export class HelloComponent  {
  @Input() name: string;
}
