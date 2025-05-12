import { Component } from '@angular/core';

@Component({
  selector: 'app-fizbuzz',
  standalone: true,
  imports: [],
  template: `
    <div style="grid-template-columns: repeat(10,1fr); grid-template-rows: repeat(3,1fr); text-align: center;">
      @for (i of fbOutput; track i) {
        <p>
          @if(i % 3 == 0 && i % 5 === 0) {FizzBuzz}
          @else if(i % 3 === 0) { Fizz }
          @else if(i % 5 === 0) { Buzz }
          @else { {{i}} }
        </p>
      }
    </div>
  `
})
export class FizbuzzComponent {
  fbOutput: Array<number> = Array.from({length:3*10}, (_,i) => i+1);
}
