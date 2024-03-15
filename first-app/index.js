#!/usr/bin/env node

const pkgJSON = require('../package.json');
const welcome = require('cli-welcome');


welcome({
  title: pkgJSON.name,
  tagLine: `Welcome to ${pkgJSON.name}`,
  version: pkgJSON.version,
  description: pkgJSON.description,
  bgColor: `#6937FF`,
  color: `#000000`,
  bold: true,
  clear: true
})

console.log(`
pg_programming

Dev

X:      https://x.com
github: https://github.com

`) 