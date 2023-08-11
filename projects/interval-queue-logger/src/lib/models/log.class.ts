import { ILog } from "./log.interface";

export class Log implements ILog {
  timeStamp: string;
  message: string;
  stackTrace: string;

  constructor(timeStamp: string, message: string, stackTrace:string ) {
    this.timeStamp = timeStamp;
    this.message = message;
    this.stackTrace = stackTrace;
  }

  toString() {
    return `${this.timeStamp}: ${this.message}, ${this.stackTrace}`;
  }

}
