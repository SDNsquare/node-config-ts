"use strict";
/**
 * Created by tushar on 30/12/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const loadCliConfigs_1 = require("../src/loadCliConfigs");
describe('load-cli-configs', () => {
    it('should load configs from cli', () => {
        const process = {
            argv: ['--port', '100', '--env', 'production']
        };
        const actual = loadCliConfigs_1.loadCLIConfigs(process);
        const expected = {
            port: '100',
            env: 'production'
        };
        assert.deepEqual(actual, expected);
    });
});
