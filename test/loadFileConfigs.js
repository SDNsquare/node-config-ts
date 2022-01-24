"use strict";
/**
 * Created by tushar on 30/12/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const path = require("path");
const loadFileConfigs_1 = require("../src/loadFileConfigs");
const defaultConfig = require("./stub-module/config/default.json");
const deploymentConfig = require("./stub-module/config/deployment/www.example.com.json");
const envConfig = require("./stub-module/config/env/production.json");
const userConfig = require("./stub-module/config/user/root.json");
describe('load-file-configs', () => {
    it('should load the configs that are available', () => {
        const process = {
            cwd: () => path.resolve(__dirname, 'stub-module'),
            env: {
                DEPLOYMENT: 'www.example.com',
                NODE_ENV: 'production',
                USER: 'root'
            }
        };
        const actual = loadFileConfigs_1.loadFileConfigs(process);
        const expected = {
            defaultConfig,
            deploymentConfig,
            envConfig,
            userConfig
        };
        assert.deepEqual(actual, expected);
    });
    it('should load default configs when not available', () => {
        const process = {
            cwd: () => path.resolve(__dirname, 'stub-module'),
            env: {
                DEPLOYMENT: 'www.example.com',
                NODE_ENV: 'development',
                USER: 'root'
            }
        };
        const actual = loadFileConfigs_1.loadFileConfigs(process);
        const expected = {
            defaultConfig,
            deploymentConfig,
            envConfig: {},
            userConfig
        };
        assert.deepEqual(actual, expected);
    });
    describe('alternative env varialble', () => {
        it('should load the configs that are available', () => {
            const process = {
                cwd: () => path.resolve(__dirname, 'stub-module'),
                env: {
                    DEPLOYMENT: 'www.example.com',
                    NODE_CONFIG_TS_ENV: 'production',
                    USER: 'root'
                }
            };
            const actual = loadFileConfigs_1.loadFileConfigs(process);
            const expected = {
                defaultConfig,
                deploymentConfig,
                envConfig,
                userConfig
            };
            assert.deepEqual(actual, expected);
        });
        it('should load default configs when not available', () => {
            const process = {
                cwd: () => path.resolve(__dirname, 'stub-module'),
                env: {
                    DEPLOYMENT: 'www.example.com',
                    NODE_CONFIG_TS_ENV: 'development',
                    USER: 'root'
                }
            };
            const actual = loadFileConfigs_1.loadFileConfigs(process);
            const expected = {
                defaultConfig,
                deploymentConfig,
                envConfig: {},
                userConfig
            };
            assert.deepEqual(actual, expected);
        });
    });
});
