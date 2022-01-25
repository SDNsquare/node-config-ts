/**
 * Created by tushar on 30/12/17.
 */

import * as path from 'path'
import {baseConfigPath} from './baseConfigPath'
import {default as minimist} from 'minimist'

const DEFAULT_FILENAME = 'default'

export type ConfigTypes = {
  defaultConfig: string
  envConfig: string
  deploymentConfig: string
  userConfig: string
  systemConfig: string
  cliConfig: string
}

export type NonConfigEnv = {
  cwd(): string
  env: {
    NODE_ENV?: string
    NODE_CONFIG_TS_ENV?: string
    DEPLOYMENT?: string
    USER?: string
    USERNAME?: string
    NODE_CONFIG_TS_DIR?: string
    ETCCONFIG?: string
  }
  argv?: string[]
}

export const configPaths = <T extends NonConfigEnv>(
  process: T
): ConfigTypes => {
  const baseDIR = baseConfigPath(process)
  const defaultConfig = path.resolve(
    process.cwd(),
    `${baseDIR}/${DEFAULT_FILENAME}.json`
  )
  const envConfigFile = `${process.env['NODE_CONFIG_TS_ENV'] ||
    process.env['NODE_ENV'] ||
    DEFAULT_FILENAME}`
  const envConfig = path.resolve(
    process.cwd(),
    `${baseDIR}/env/${envConfigFile}.json`
  )
  const deploymentConfig = path.resolve(
    process.cwd(),
    `${baseDIR}/deployment/${process.env['DEPLOYMENT'] ||
      DEFAULT_FILENAME}.json`
  )
  const userConfig = path.resolve(
    process.cwd(),
    `${baseDIR}/user/${process.env['USER'] ||
      process.env['USERNAME'] ||
      DEFAULT_FILENAME}.json`
  )
  const systemConfig = path.resolve(
    '/etc/sdnsquare/',
    `${process.env['ETCCONFIG'] || 'grid'}.json`
  )
  const args = minimist(process.argv!.slice(2))
  const cliConfig = args['configfile'] || '/noconfigfile'
  return {
    defaultConfig,
    envConfig,
    deploymentConfig,
    userConfig,
    systemConfig,
    cliConfig
  }
}
