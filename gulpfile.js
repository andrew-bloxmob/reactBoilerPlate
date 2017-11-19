const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const watch = require('gulp-watch');

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
    watch: ['**/**']
};

gulp.task('start-dev', () => {
    gulp.start('webpack');
    nodemon(nodemonOptions)
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('webpack', () => {
    console.log('Webpack watch initiated');
    return watch('**/*.jsx', function () {
        gulp.src('./main.js')
            .pipe(webpackStream(webpackConfig), webpack)
            .pipe(gulp.dest('./dist'));
        console.log('Finished compiling webpack bundles');
    });
});