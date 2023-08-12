import { ValueProvider, ClassProvider, ConstructorProvider, ExistingProvider, FactoryProvider } from "@angular/core";
import { LoggerConfig } from "../config/config.interface";

export type LoggerProvider =
  | ValueProvider
  | ClassProvider
  | ConstructorProvider
  | ExistingProvider
  | FactoryProvider;

export type Logger_Config = LoggerConfig | null | undefined;

export interface ICustomLoggerProviders {
  configProvider?: LoggerProvider;
  timeStampProvider?: LoggerProvider;
  messageFormatProvider?: LoggerProvider;
  loggerProvider?: LoggerProvider;
  targetProvider?: LoggerProvider;
}
