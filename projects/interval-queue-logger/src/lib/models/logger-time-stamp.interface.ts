import { LoggerConfig } from '../config/config.interface';

export interface ITimeStampService {
  /**
   * Gets timeStamp format
   * @param config
   */
  getTimeStamp(config: LoggerConfig): string;
}
