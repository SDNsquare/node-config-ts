"use strict";
/**
 * Created by tushar on 30/12/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const baseConfigPath_1 = require("./baseConfigPath");
const minimist_1 = require("minimist");
const DEFAULT_FILENAME = 'default';
exports.configPaths = (process) => {
    const baseDIR = baseConfigPath_1.baseConfigPath(process);
    const defaultConfig = path.resolve(process.cwd(), `${baseDIR}/${DEFAULT_FILENAME}.json`);
    const envConfigFile = `${process.env['NODE_CONFIG_TS_ENV'] ||
        process.env['NODE_ENV'] ||
        DEFAULT_FILENAME}`;
    const envConfig = path.resolve(process.cwd(), `${baseDIR}/env/${envConfigFile}.json`);
    const deploymentConfig = path.resolve(process.cwd(), `${baseDIR}/deployment/${process.env['DEPLOYMENT'] ||
        DEFAULT_FILENAME}.json`);
    const userConfig = path.resolve(process.cwd(), `${baseDIR}/user/${process.env['USER'] ||
        process.env['USERNAME'] ||
        DEFAULT_FILENAME}.json`);
    const systemConfig = path.resolve('/etc/sdnsquare/', `${process.env['ETCCONFIG'] || 'grid-backend'}.json`);
    const args = minimist_1.default(process.argv.slice(2));
    const cliConfig = args['configfile'] || '/noconfigfile';
    return {
        defaultConfig,
        envConfig,
        deploymentConfig,
        userConfig,
        systemConfig,
        cliConfig
    };
};
