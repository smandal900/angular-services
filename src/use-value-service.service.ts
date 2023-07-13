import { Injectable } from '@angular/core';

@Injectable()
export class UseValueServiceService {
  constructor(public message: string) {}

  log() {
    console.log(this.message);
    return `this is from UseValueServiceService ===> ${this.message}`;
  }
}
