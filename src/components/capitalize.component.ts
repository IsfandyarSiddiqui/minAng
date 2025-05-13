import { booleanAttribute, Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-capitalize',
  standalone: true,
  imports: [],
  template: `
    <div>
      <input type="text" [value]="name()" (input)="setName($event)" [placeholder]="placeholder()">
      {{ greeting() }}
    </div>
    <p>
      @if(bold()) { <strong> {{ message() }} </strong> }
      @else { {{ message() }} }
    </p>
  `,
  styles: `
    div { grid-template-columns: repeat(3,1fr); }
    p { margin-top: 0; margin-left: 0.25rem; }
  `
})
export class CapitalizeComponent {
  name = signal("");
  greeting = computed(() => `Hello ${this.name().toUpperCase()}`);
  message = input.required();
  placeholder = input("", { transform: trimString, alias: "ph" });
  bold = input(false, {transform: booleanAttribute} )

  setName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}

function trimString(value: string | undefined): string | undefined {
  return value?.trim() ?? '';
}
