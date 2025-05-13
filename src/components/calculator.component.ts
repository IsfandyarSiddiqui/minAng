import { Component, input, Input, InputSignal, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorService, registerType } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Modular Calculator (mod {{ mod() }})</h2>

    <label>
      Input value:
      <input type="number" [(ngModel)]="inputValue" />
    </label>

    <br /><br />

    <button (click)="add()">Add</button>
    <button (click)="subtract()">Subtract</button>
    <button (click)="multiply()">Multiply</button>
    <button (click)="divide()">Divide</button>

    <hr />

    <h3>Register Values</h3>
    <ul>
      <li>A: {{ calc.regA }}</li>
      <li>B: {{ calc.regB }}</li>
      <li>C: {{ calc.regC }}</li>
      <li>D: {{ calc.regD }}</li>
    </ul>
  `
})
export class CalculatorComponent implements OnInit {
  mod: InputSignal<number> = input(32); // newer signal based approach. Can be declared without a default value input()
  @Input({required:true}) register1: registerType = 'a';
  @Input() register2: registerType = 'b';

  inputValue = 4; //Math.round(Math.random() * this.mod() * 0.5);

  constructor(public calc: CalculatorService) {}

  ngOnInit(): void {}

  add() {
    this.calc.add(this.inputValue, this.register1, this.mod());
    this.calc.add(this.inputValue, this.register2, this.mod());
  }

  subtract() {
    this.calc.subtract(this.inputValue, this.register1, this.mod());
    this.calc.subtract(this.inputValue, this.register2, this.mod());
  }

  multiply() {
    this.calc.multiply(this.inputValue, this.register1, this.mod());
    this.calc.multiply(this.inputValue, this.register2, this.mod());
  }

  divide() {
    this.calc.divide(this.inputValue, this.register1, this.mod());
    this.calc.divide(this.inputValue, this.register2, this.mod());
  }
}
