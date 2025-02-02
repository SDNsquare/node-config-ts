"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const webpack_1 = require("webpack");
const R = require("ramda");
const setConfigResolver = R.assocPath(['resolve', 'alias', 'node-config-ts'], 'node-config-ts/iso');
const setGlobalConfigPlugin = R.over(R.lensProp('plugins'), R.append(new webpack_1.DefinePlugin({
    __CONFIG__: JSON.stringify(index_1.config)
})));
exports.NodeConfigTSPlugin = R.compose(setConfigResolver, setGlobalConfigPlugin);
