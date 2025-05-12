import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-capitalize',
  standalone: true,
  imports: [],
  template: `
    <div style="grid-template-columns: repeat(2,1fr)">
      <input type="text" [value]="name()" (input)="setName($event)">
      <p>{{greeting()}}</p>
    </div>
  `,
  styles: ``
})
export class CapitalizeComponent {
  name = signal("");
  greeting = computed(() => `Hello, ${this.name().toUpperCase()}!`);

  setName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}
