import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  regA: number = 0;
  regB: number = 0;
  regC: number = 0;
  regD: number = 0;
  mod: number = 32;
  constructor() { }

  setMod(modi: number) {
    this.mod = modi;
  }

  add(x: number, reg: 'a' | 'b' | 'c' | 'd') {
    this.updateRegister(reg, (val) => (val + x) % this.mod);
  }

  subtract(x: number, reg: 'a' | 'b' | 'c' | 'd') {
    this.updateRegister(reg, (val) => (val - x + this.mod) % this.mod);
  }

  multiply(x: number, reg: 'a' | 'b' | 'c' | 'd') {
    this.updateRegister(reg, (val) => (val * x) % this.mod);
  }

  divide(x: number, reg: 'a' | 'b' | 'c' | 'd') {
    if (x === 0) return; // avoid division by zero
    this.updateRegister(reg, (val) => Math.floor(val / x) % this.mod);
  }

  private updateRegister(reg: 'a' | 'b' | 'c' | 'd', operation: (val: number) => number) {
    switch (reg) {
      case 'a': this.regA = operation(this.regA); break;
      case 'b': this.regB = operation(this.regB); break;
      case 'c': this.regC = operation(this.regC); break;
      case 'd': this.regD = operation(this.regD); break;
    }
  }
}
