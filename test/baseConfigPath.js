"use strict";
/**
 * Created by tushar on 09/11/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const baseConfigPath_1 = require("../src/baseConfigPath");
describe('baseConfigPath', () => {
    it('should read from env variable', () => {
        const process = {
            env: { NODE_ENV: 'production', NODE_CONFIG_TS_DIR: './main/config' }
        };
        const actual = baseConfigPath_1.baseConfigPath(process);
        const expected = './main/config';
        assert.strictEqual(actual, expected);
    });
    it('should read default path', () => {
        const process = {
            env: { NODE_ENV: 'production' }
        };
        const actual = baseConfigPath_1.baseConfigPath(process);
        const expected = 'config';
        assert.strictEqual(actual, expected);
    });
});
