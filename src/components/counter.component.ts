import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div style="grid-template-columns: repeat(3,1fr);">
      <button type="button" (mousedown)="up()" (mouseup)="clearTimeout()" (mouseleave)="clearTimeout()">Up</button>
      <button type="button" (mousedown)="down()" (mouseup)="clearTimeout()" (mouseleave)="clearTimeout()">Down</button>
      <span>{{x}}</span>
    </div>
  `,
  styles: ``
})
export class CounterComponent {
  x = 0;
  intervalId: any = null;

  up() { this.x++; this.intervalId = setTimeout( () => this.up(), 100); }
  down() { this.x--; this.intervalId= setTimeout( () => this.down(), 100 ); }
  clearTimeout() { clearTimeout(this.intervalId); }
}
