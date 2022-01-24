"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by tushar on 30/12/17.
 */
const assert = require("assert");
const mergeFileConfigs_1 = require("../src/mergeFileConfigs");
describe('mergeFileConfigs()', () => {
    it('should return defaultConfig by default', () => {
        const configs = {
            defaultConfig: { a: 1 },
            envConfig: {},
            deploymentConfig: {},
            userConfig: {},
            cliConfig: {}
        };
        const actual = mergeFileConfigs_1.mergeFileConfigs(configs);
        const expected = { a: 1 };
        assert.deepEqual(actual, expected);
    });
    it('should override with envConfig', () => {
        const configs = {
            defaultConfig: { a: 0, b: 1 },
            envConfig: { b: 2, c: 3 },
            deploymentConfig: {},
            userConfig: {},
            cliConfig: {}
        };
        const actual = mergeFileConfigs_1.mergeFileConfigs(configs);
        const expected = { a: 0, b: 2, c: 3 };
        assert.deepEqual(actual, expected);
    });
    it('should override with deploymentConfig', () => {
        const configs = {
            defaultConfig: { a: 0, b: 1 },
            envConfig: { b: 2, c: 3 },
            deploymentConfig: { c: 4, d: 5 },
            userConfig: {},
            cliConfig: {}
        };
        const actual = mergeFileConfigs_1.mergeFileConfigs(configs);
        const expected = { a: 0, b: 2, c: 4, d: 5 };
        assert.deepEqual(actual, expected);
    });
    it('should override with userConfig', () => {
        const configs = {
            defaultConfig: { a: 0, b: 1 },
            envConfig: { b: 2, c: 3 },
            deploymentConfig: { c: 4, d: 5 },
            userConfig: { d: 6, e: 7 },
            cliConfig: {}
        };
        const actual = mergeFileConfigs_1.mergeFileConfigs(configs);
        const expected = { a: 0, b: 2, c: 4, d: 6, e: 7 };
        assert.deepEqual(actual, expected);
    });
    it('should merge deeply', () => {
        const configs = {
            defaultConfig: { a: { b: { c0: 1 } } },
            envConfig: { a: { b: { c1: 2 } } },
            deploymentConfig: {},
            userConfig: {},
            cliConfig: {}
        };
        const actual = mergeFileConfigs_1.mergeFileConfigs(configs);
        const expected = { a: { b: { c0: 1, c1: 2 } } };
        assert.deepEqual(actual, expected);
    });
});
