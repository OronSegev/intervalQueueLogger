import { InjectionToken } from "@angular/core";
import { IMessageFormatService } from "../models/logger-message-format.interface";

export const TOKEN_LOGGER_MESSAGEFORMAT_SERVICE = new InjectionToken<IMessageFormatService>('TOKEN_LOGGER_MESSAGEFORMAT_SERVICE');
