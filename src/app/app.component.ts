import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from '../components/counter.component';
import { CapitalizeComponent } from '../components/capitalize.component';
import { FizbuzzComponent } from '../components/fizbuzz.component';
import { CalculatorComponent } from '../components/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CapitalizeComponent, FizbuzzComponent, CalculatorComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-counter />
    <app-capitalize [message]="'How are you?'" [ph]="'Write your name'" bold=true />
    <app-fizbuzz />
    <div style="grid-template-columns: repeat(4,1fr); gap:4rem; margin:2rem"> 
      <app-calculator [mod]="32" [register1]="'a'" [register2]="'b'" />
      <app-calculator [mod]="64" [register1]="'b'" [register2]="'c'" />
      <app-calculator [mod]="128" [register1]="'c'" [register2]="'d'" />
      <app-calculator [mod]="256" [register1]="'d'" [register2]="'a'" />
    </div>
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'my Angular Application';
}
