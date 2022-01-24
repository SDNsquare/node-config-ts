"use strict";
/**
 * Created by tushar on 30/12/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const index_1 = require("../index");
const baseConfigPath_1 = require("./baseConfigPath");
const prettier = require("prettier");
const JsonToTS = require('json-to-ts');
const file = `Config.d.ts`;
const ts = prettier.format([
    '/* tslint:disable */',
    '/* eslint-disable */',
    'declare module "node-config-ts" {'
]
    .concat(JsonToTS(index_1.config, { rootName: 'IConfig' }))
    .concat([
    'export const config: Config',
    'export type Config = IConfig',
    '}'
])
    .join('\n'), {
    parser: 'typescript',
    semi: false
});
fs.writeFileSync(path.resolve(process.cwd(), baseConfigPath_1.baseConfigPath(process), file), ts);
