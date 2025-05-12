import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from '../components/counter.component';
import { CapitalizeComponent } from '../components/capitalize.component';
import { FizbuzzComponent } from '../components/fizbuzz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CapitalizeComponent, FizbuzzComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-counter />
    <app-capitalize />
    <app-fizbuzz />
    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'my Angular Application';
}
