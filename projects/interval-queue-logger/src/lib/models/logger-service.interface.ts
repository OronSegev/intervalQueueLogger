import { Injectable } from "@angular/core";

export interface ILoggerService {
  error(errorMsg: string, stackTrace:string): void;
}

