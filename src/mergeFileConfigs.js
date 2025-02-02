"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const R = require("ramda");
/**
 * Merges the configs in the following order —
 * defaultConfig < envConfig < deploymentConfig < userConfig < cliConfig
 * @param {ConfigSources} configs
 * @return {any}
 */
exports.mergeFileConfigs = (configs) => {
    return R.reduce(R.mergeDeepRight, configs.defaultConfig, [
        configs.envConfig,
        configs.deploymentConfig,
        configs.userConfig,
        configs.systemConfig,
        configs.cliConfig
    ]);
};
