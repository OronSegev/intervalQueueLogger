import { InjectionToken } from "@angular/core";
import { LoggerConfig } from "../config/config.interface";

export const TOKEN_LOGGER_CONFIG = new InjectionToken<LoggerConfig>('TOKEN_LOGGER_CONFIG');
