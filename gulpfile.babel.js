"use strict";


import gulp     from 'gulp';
import plugins  from 'gulp-load-plugins';
import browser  from 'browser-sync';
import yaml     from 'js-yaml';
import fs       from 'fs';
import yargs    from 'yargs';

const $ = plugins();

const PRODUCTION = !!(yargs.argv.production);

const { COMPATIBILITY, PORT, PATHS } = loadConfig();
function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

gulp.task('default', []);
