export type ILoggerTarget = 'console' | 'localStorage';

export interface LoggerConfig {
  isProduction: boolean;
  timeStampFormat?: string;
  messageFormat?: string;
  queue?: {
    interval: number;
  };
  target?: ILoggerTarget;
  localStorageKey?: string;
}
