const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const watch = require('gulp-watch');

const sass = require('gulp-sass');

gulp.task('js', () => {
    gulp.src('./src/js/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./dist/js'));
});

var nodemonOptions = {
    script: 'server.js',
    ext: 'js',
    env: {
        'NODE_ENV': 'development'
    },
    verbose: false,
    ignore: [],
    watch: ['server.js']
};

gulp.task('start-dev', () => {
    gulp.start('webpack');
    gulp.start('sass:watch');
    nodemon(nodemonOptions)
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('webpack', () => {
    console.log('Webpack watch initiated');
    return watch(['./src/**/*.jsx', './main.js'], function () {
        gulp.src('./main.js')
            .pipe(webpackStream(webpackConfig), webpack)
            .pipe(gulp.dest('./dist'));
        console.log('Finished compiling webpack bundles');
    });
});


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});