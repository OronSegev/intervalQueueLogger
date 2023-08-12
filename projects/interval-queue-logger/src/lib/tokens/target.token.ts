import { InjectionToken } from "@angular/core";
import { ITarget } from "../models/target.interface";

export const LOGGER_TARGET_TOKEN = new InjectionToken<ITarget>('LOGGER_TARGET_TOKEN');
