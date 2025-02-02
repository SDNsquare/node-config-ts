"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by tushar on 30/12/17.
 */
const R = require("ramda");
const loadCliConfigs_1 = require("./loadCliConfigs");
const loadFileConfigs_1 = require("./loadFileConfigs");
const replaceWithEnvVar_1 = require("./replaceWithEnvVar");
const mergeFileConfigs_1 = require("./mergeFileConfigs");
/**
 * Loads all the configs from files and cli and merges them.
 */
exports.mergeAllConfigs = R.converge(R.mergeDeepRight, [
    R.converge(replaceWithEnvVar_1.replaceWithEnvVar, [
        R.compose(mergeFileConfigs_1.mergeFileConfigs, loadFileConfigs_1.loadFileConfigs),
        R.identity
    ]),
    loadCliConfigs_1.loadCLIConfigs
]);
