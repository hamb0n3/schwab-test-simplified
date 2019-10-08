let mix = require('laravel-mix');

mix.js('./src/js/index.js', './public/js/')
    .sass('./src/scss/app.scss', './public/css/')
    .sourceMaps()
    .webpackConfig({
        devtool: 'source-map'
    })
    .options({
        processCssUrls: false
    });
