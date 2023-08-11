import { IQLoggerConfig } from "../../config/config.interface";

export const TOKEN_LOGGER_MESSAGEFORMAT_SERVICE = 'TOKEN_LOGGER_MESSAGEFORMAT_SERVICE';

export interface IIQLoggerMessageFormatService {
  /**
   * Gets message format
   * @param config
   */
    getMessageFormat(config: IQLoggerConfig): string;
  }
