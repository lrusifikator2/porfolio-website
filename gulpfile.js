/* system */
const path = require('path');
const proj_name = path.resolve(__dirname, '.').split(path.sep).pop();

/* global */
const { src, dest, parallel, task } = require('gulp');
const gwatch = require('gulp').watch;
const browSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const ssh = require('gulp-ssh')

/* css */
const sass = require('gulp-sass');
const minifyCSS = require('gulp-cssnano');
const cssbeautify = require('gulp-cssbeautify');
const autoprefixer = require('gulp-autoprefixer');
const sassGlob = require('gulp-sass-glob');

/* js */
const jsuglify = require('gulp-uglify');
const jsbeautify = require('gulp-beautify');
const jsinclude = require('gulp-include')

/* html */
//const htmlconcat = require('');

/* ----------------------------------files to compile---------------------------------------------*/
//let html_files = ["index.html", "pages/resume.html", "pages/contacts.html", "pages/portfolio.html", "pages/about.html"];
let html_files = ["index.html", "pages/resume.html", "pages/contacts.html"];
let css_files = ["main.scss", "resume.scss", "contacts.scss", "main-bg.scss", "index.scss", "menu.scss"];
/* -----------------------------------------------------------------------------------------------*/

const sshConfig = require('./../gulpfile.js').sshConfig;
var gulpSSH = new ssh({
  ignoreErrors: false,
  sshConfig: sshConfig
});

function compile_css(m, fl){
  let add_func;
  if(m == true){
    add_func = minifyCSS;
  } else {
    add_func = cssbeautify;
  } 
  
  return src("./" + proj_name + "/scss/"  + fl)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(add_func())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest("./" + proj_name + "/build/css"))
    .pipe(browSync.stream())
    .pipe(gulpSSH.dest('/var/www/html/build/css'))
}

function css(m=false) {
  for (let i = 0; i < css_files.length; i++){
    compile_css(m, css_files[i]);
  }
}

function js(m=false) {
  if(m == true){
    add_func = jsuglify;
  } else {
    add_func = jsbeautify;
  }

  return src("./" + proj_name + "/js/main.js", { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(jsinclude()).on('error', console.log)
    .pipe(add_func())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('./' + proj_name + '/build/js', { sourcemaps: true }))
    .pipe(browSync.stream())
    .pipe(gulpSSH.dest('/var/www/html/build/js'))
    
}

function compile_html(path){
  let to = path.lastIndexOf('/');
  let folder;

  if(to > 0) {
    folder = path.substring(0, to);
  } else {
    folder = "";
  }

  return src("./" + proj_name + "/" + path)
    .pipe(gulpSSH.dest('/var/www/html/' + folder))
}

function html() {
  for(let i = 0; i < html_files.length; i++) {
    compile_html(html_files[i]);  
  }
}

function img(){
  return src("./" + proj_name + "/img/**/*")
    .pipe(gulpSSH.dest('/var/www/html/img/'));
}

function resume(){
  ;
}

function watch() {
  browSync.init({
    port: 3000, 
    server: {
      baseDir: './' + proj_name
    } 
  });

  gwatch('./' + proj_name + '/img/**/*', img);
  gwatch('./' + proj_name + '/scss/**/*.scss', css);
  gwatch('./' + proj_name + '/js/**/*.js', js);
  gwatch('./' + proj_name + '/*.html').on('change', browSync.reload).on('change', html);
  gwatch('./' + proj_name + '/pages/**/*.html').on('change', browSync.reload).on('change', html);
}

task(proj_name + "_mj", function() { 
  return new Promise(function(resolve, reject) {
    css();
    js(true);
    console.log("js minified");
    resolve();
  });
});

task(proj_name + "_mc", function() { 
  return new Promise(function(resolve, reject) {
    css(true);
    js();
    console.log("css minified");
    resolve();
  });
});

task(proj_name + "_m", function() { 
  return new Promise(function(resolve, reject) {
    css();
    js();
    console.log("js and css minified");
    resolve();
  });
});

task(proj_name, function() { 
  return new Promise(function(resolve, reject) {
    css();
    js();
    html();
    watch();
    resolve();
  });
});