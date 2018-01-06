import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable()
export class LogService {

  constructor() { }

  writeLog(logText) {
    console.log('logText = ', logText);
  }
}
