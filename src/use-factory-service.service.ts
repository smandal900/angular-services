import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UseFactoryServiceService {
  constructor(private logger: LoggerService) {}

  log() {
    let m = this.logger.log();
    return `this is from UseFactoryServiceService ==> ${m}`;
  }
  log2() {
    console.log(`second method`);
  }
}
