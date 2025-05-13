import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  regA: number = 0;
  regB: number = 0;
  regC: number = 0;
  regD: number = 0;
  constructor() { }

  add(x: number, reg: registerType, mod: number) {
    this.updateRegister(reg, (val) => (val + x) % mod);
  }

  subtract(x: number, reg: registerType, mod: number) {
    this.updateRegister(reg, (val) => (val - x + mod) % mod);
  }

  multiply(x: number, reg: registerType, mod: number) {
    this.updateRegister(reg, (val) => (val * x) % mod);
  }

  divide(x: number, reg: registerType, mod: number) {
    if (x === 0) return; // avoid division by zero
    this.updateRegister(reg, (val) => Math.floor(val / x) % mod);
  }

  private updateRegister(reg: registerType, operation: (val: number) => number) {
    switch (reg) {
      case 'a': this.regA = operation(this.regA); break;
      case 'b': this.regB = operation(this.regB); break;
      case 'c': this.regC = operation(this.regC); break;
      case 'd': this.regD = operation(this.regD); break;
    }
  }
}

export type registerType = 'a' | 'b' | 'c' | 'd';