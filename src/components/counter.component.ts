import { Component} from '@angular/core';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div style="grid-template-columns: repeat(3,1fr);">
      <button type="button" (click)="up()">Up</button>
      <button type="button" (click)="down()">Down</button>
      <span>{{x}}</span>
    </div>
  `,
  styles: ``
})
export class CounterComponent {
  x = 0;
  up() { this.x++; }
  down() { this.x--; }
}
