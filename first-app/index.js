#!/usr/bin/env node

const clearConsole = require('clear-any-console')
const pkgJSON = require('../package.json');

clearConsole();

console.log(`
NAME:         ${pkgJSON.name}
VERSION:      ${pkgJSON.version}
DESCRIPTION:  ${pkgJSON.description}
`)

console.log(`
pg_programming

Dev

X:      https://x.com
github: https://github.com

`) 