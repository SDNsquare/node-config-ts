import * as R from 'ramda'
import { config } from '..'

/**
 * Merges the configs in the following order —
 * defaultConfig < envConfig < deploymentConfig < userConfig < cliConfig
 * @param {ConfigSources} configs
 * @return {any}
 */

export const mergeFileConfigs = (configs: {[key: string]: any}) => {
  return R.reduce(R.mergeDeepRight, configs.defaultConfig, [
    configs.envConfig,
    configs.deploymentConfig,
    configs.userConfig,
    configs.systemConfig,
    configs.cliConfig
  ])
}
