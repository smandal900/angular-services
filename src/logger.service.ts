import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}

  log() {
    console.log(`console from: Logger Service`);
    return `log from Logger Service`;
  }
}
