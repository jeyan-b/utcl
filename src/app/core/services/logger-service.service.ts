import { Injectable } from '@angular/core';
//import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class LoggerServiceService {
  private logFilePath = 'D://General/UTCL_Logs.txt';
  constructor() {}

  // log(message: string): void {
  //   const logMessage = `${new Date().toISOString()} - ${message}\n`;
  //   fs.appendFile(this.logFilePath, logMessage, (err) => {
  //     if (err) {
  //       console.error('Error writing to log file:', err);
  //     }
  //   });
  // }
}
