#!/usr/bin/env node

const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const render = require('../')

const readJson = file => require(
  path.join(__dirname, 'json', file + '.json'))

const readYaml = file => yaml.safeLoad(fs.readFileSync(
  path.join(__dirname, 'yaml', file + '.yml')))

console.log('[JSON]')
console.log()

const templateJson = readJson('template')
const dataJson = readJson('data')
const resultJson = render(templateJson, dataJson)
console.log(JSON.stringify(resultJson, null, 2))

console.log()
console.log('[YAML]')
console.log()

const templateYaml = readYaml('template')
const dataYml = readYaml('data')
const resultYaml = render(templateYaml, dataYml)
console.log(yaml.safeDump(resultYaml))
