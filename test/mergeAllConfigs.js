"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const path = require("path");
const mergeAllConfigs_1 = require("../src/mergeAllConfigs");
describe('mergeAllConfigs()', () => {
    it('should load configs from all the places', () => {
        const process = {
            argv: [],
            cwd: () => path.resolve(__dirname, 'stub-module'),
            env: {
                DEPLOYMENT: 'www.example.com',
                NODE_ENV: 'production',
                USER: 'root',
                MAX_RETRIES: 999
            }
        };
        const actual = mergeAllConfigs_1.mergeAllConfigs(process);
        const expected = {
            type: 'user',
            port: 9000,
            maxRetries: 999
        };
        assert.deepEqual(actual, expected);
    });
    it('should override with cli configs', () => {
        const process = {
            argv: ['--port', '3000', '--wonder', 'woman'],
            cwd: () => path.resolve(__dirname, 'stub-module'),
            env: {
                DEPLOYMENT: 'www.example.com',
                NODE_ENV: 'production',
                USER: 'root',
                MAX_RETRIES: 999
            }
        };
        const actual = mergeAllConfigs_1.mergeAllConfigs(process);
        const expected = {
            type: 'user',
            port: 3000,
            wonder: 'woman',
            maxRetries: 999
        };
        assert.deepEqual(actual, expected);
    });
    it('should override ENV variables with cli configs', () => {
        const process = {
            argv: ['--port', '3000', '--maxRetries', '150'],
            cwd: () => path.resolve(__dirname, 'stub-module'),
            env: {
                DEPLOYMENT: 'www.example.com',
                NODE_ENV: 'production',
                USER: 'root',
                MAX_RETRIES: 999
            }
        };
        const actual = mergeAllConfigs_1.mergeAllConfigs(process);
        const expected = {
            type: 'user',
            port: 3000,
            maxRetries: 150
        };
        assert.deepEqual(actual, expected);
    });
    describe('alternative env varialble', () => {
        it('should load configs from all the places', () => {
            const process = {
                argv: [],
                cwd: () => path.resolve(__dirname, 'stub-module'),
                env: {
                    DEPLOYMENT: 'www.example.com',
                    NODE_CONFIG_TS_ENV: 'production',
                    USER: 'root',
                    MAX_RETRIES: 999
                }
            };
            const actual = mergeAllConfigs_1.mergeAllConfigs(process);
            const expected = {
                type: 'user',
                port: 9000,
                maxRetries: 999
            };
            assert.deepEqual(actual, expected);
        });
        it('should override with cli configs', () => {
            const process = {
                argv: ['--port', '3000', '--wonder', 'woman'],
                cwd: () => path.resolve(__dirname, 'stub-module'),
                env: {
                    DEPLOYMENT: 'www.example.com',
                    NODE_CONFIG_TS_ENV: 'production',
                    USER: 'root',
                    MAX_RETRIES: 999
                }
            };
            const actual = mergeAllConfigs_1.mergeAllConfigs(process);
            const expected = {
                type: 'user',
                port: 3000,
                wonder: 'woman',
                maxRetries: 999
            };
            assert.deepEqual(actual, expected);
        });
        it('should override ENV variables with cli configs', () => {
            const process = {
                argv: ['--port', '3000', '--maxRetries', '150'],
                cwd: () => path.resolve(__dirname, 'stub-module'),
                env: {
                    DEPLOYMENT: 'www.example.com',
                    NODE_CONFIG_TS_ENV: 'production',
                    USER: 'root',
                    MAX_RETRIES: 999
                }
            };
            const actual = mergeAllConfigs_1.mergeAllConfigs(process);
            const expected = {
                type: 'user',
                port: 3000,
                maxRetries: 150
            };
            assert.deepEqual(actual, expected);
        });
    });
});
