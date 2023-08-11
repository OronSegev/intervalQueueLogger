

export const TOKEN_LOGGER_CONFIG = 'TOKEN_LOGGER_CONFIG';


export type IQLoggerTarget = 'console' | 'localStorage' | 'customTarget';

export interface IQLoggerConfig {
  timeStampFormat?: string;
  target?: IQLoggerTarget;
  targetFactory?: (logs: string[]) => void;
  queueTime?: number;
  isProduction?: boolean;
  messageFormat?: string;
}
