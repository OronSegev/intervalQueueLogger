import { IQLoggerConfig } from "../config/config.interface";


export const TOKEN_LOGGER_TIMESTAMP_SERVICE = 'TOKEN_LOGGER_TIMESTAMP_SERVICE';

export interface IIQLoggerTimeStampService {
/**
 * Gets timeStamp format
 * @param config
 */
  getTimeStampFormat(config: IQLoggerConfig): string;
}
