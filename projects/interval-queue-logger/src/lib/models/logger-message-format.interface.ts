import { LoggerConfig } from "../config/config.interface";

export interface IMessageFormatService {
  /**
   * Gets message format
   * @param config
   */
    getMessageFormat(config: LoggerConfig, timestamp: string, message: string, additional?: any[]): string;
  }
