import 'zone.js/dist/zone';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { LoggerService } from './logger.service';
import { LoggerServiceUseClass } from './useClassType';
import { LoggerServiceUseClassService } from './logger-service-use-class.service';
import { UseExistingServiceService } from './use-existing-service.service';
import { UseFactoryServiceService } from './use-factory-service.service';
import { UseValueServiceService } from './use-value-service.service';

const useFac = (logServive: LoggerService) => {
  console.log(`logServive`);

  return new UseFactoryServiceService(logServive);
};

const use_value_obj = {
  log: () => {
    console.log(`this is from useValue`);
    return `this is from useValue use_value_obj`;
  },
};

const _useValue = new UseValueServiceService('this is UseValue');

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  providers: [
    LoggerService,
    { provide: LoggerServiceUseClass, useClass: LoggerServiceUseClassService },
    { provide: UseExistingServiceService, useExisting: LoggerService },
    {
      provide: UseFactoryServiceService,
      useFactory: useFac,
      deps: [LoggerService],
    },
    { provide: 'use_value', useValue: use_value_obj },
    { provide: UseValueServiceService, useValue: _useValue },
  ],
  template: `
    <h1>Services</h1>
    <p *ngIf="log.length">{{log}}</p>
    <button (click)="setMessage('Logger')">Logger Service</button>
    <button (click)="setMessage('UseClass')">UseClass</button>
    <button (click)="setMessage('useExisting')">useExisting</button>
    <button (click)="setMessage('useFactory')">useFactory</button>
    <button (click)="setMessage('useValue')">useValue</button>
    <button (click)="setMessage('useValue2')">useValue2</button>
  `,
})
export class App {
  log = '';

  constructor(
    private Logger: LoggerService,
    private useClassLogger: LoggerServiceUseClass,
    private useExistingLogger: UseExistingServiceService,
    private useFactoryLogger: UseFactoryServiceService,
    @Inject('use_value')
    private useValueLogger: { [key: string]: () => string },
    private useValueLogger2: UseValueServiceService
  ) {}

  setMessage(name: string) {
    if (name === 'Logger') {
      this.log = this.Logger.log();
    } else if (name === 'UseClass') {
      this.log = this.useClassLogger.log();
      this.useClassLogger.log2();
    } else if (name === 'useExisting') {
      this.log = this.useExistingLogger.log();
    } else if (name === 'useFactory') {
      this.log = this.useFactoryLogger.log();
      this.useFactoryLogger.log2();
    } else if (name === 'useValue') {
      this.log = this.useValueLogger.log();
    } else if (name === 'useValue2') {
      this.log = this.useValueLogger2.log();
    }
  }
}

bootstrapApplication(App);
