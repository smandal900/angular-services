import { Injectable } from '@angular/core';
import { LoggerServiceUseClass } from './useClassType';

@Injectable()
export class LoggerServiceUseClassService implements LoggerServiceUseClass {
  constructor() {}

  log() {
    console.log(`console from: Logger UseClass Service`);
    return `log from Logger UseClass Service`;
  }
  log2() {
    console.log(`console from: Logger2 UseClass Service`);
    return `log2 from Logger UseClass Service`;
  }
}
