import { Injector } from "@angular/core";
import { ConsoleTargetService } from "../services/targets/console-target/console-target.service";
import { LocalStorageTargetService } from "../services/targets/local-storage-target/local-storage-target.service";
import { TOKEN_LOGGER_CONFIG } from "../tokens/config.token";
import { ITarget } from "../models/target.interface";



export function resolveTarget(injector: Injector): ITarget {
  const config = injector.get(TOKEN_LOGGER_CONFIG);

  if (config?.target === 'localStorage') {
    return new LocalStorageTargetService();
  }

  return new ConsoleTargetService();
}
