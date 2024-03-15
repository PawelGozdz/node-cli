#!/usr/bin/env node
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// import chalk from 'chalk'
// // import * as pkgJSON from '../package.json'
// import welcome from 'cli-welcome'
const pkgJSON = require("../package.json");
const chalk = require('chalk')
const welcome = require('cli-welcome');
const log = console.log;

const xColor = chalk.hex('#1da1f2').bold.inverse;
const githubColor = chalk.hex('#6cc644').bold.inverse;
const dim = chalk.dim;
const italic = chalk.italic;

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

log(`
${chalk.bgBlue.bold(' pg_programming ')}

${italic('Dev')}

${xColor(' X ')}       ${dim('https://x.com)')}
${githubColor(' Gighub ')}  ${dim('https://github.com')}

`)
