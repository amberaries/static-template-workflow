"use strict";

const gulp = require('gulp');
const fs = require('fs');
const yaml = require('js-yaml');
const yargs = require('yargs');

const $ = require('gulp-load-plugins')();
const PRODUCTION = !!(yargs.argv.production);

const { COMPATIBILITY, PORT, PATHS } = loadConfig();
function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

gulp.task('default', []);
