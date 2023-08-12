import { InjectionToken } from "@angular/core";
import { ITimeStampService } from "../models/logger-time-stamp.interface";

export const TOKEN_LOGGER_TIMESTAMP_SERVICE =  new InjectionToken<ITimeStampService>('TOKEN_LOGGER_TIMESTAMP_SERVICE');
