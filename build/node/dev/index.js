const config = require('./config/config.js')
//const ip = require('./config/ip.js')
const browserSync = require('browser-sync').create()
const rollup = require('../common/tool/rollup.js')
const postcss = require('../common/tool/postcss.js')
const stylus = require('../common/tool/stylus.js')

compileJs()
compileStylus()
// compileCss()

const browserSyncConfig = {
    open: 'external',
    proxy: 'http://acl.abs/',
    port: 3000,
    notify: false
}

browserSync.init()

browserSync.watch(config.php.watch).on('change', browserSync.reload)
browserSync.watch(config.js.watch).on('change', compileJs)
// browserSync.watch(config.css.watch).on('change', compileCss)
browserSync.watch(config.stylus.watch).on('change', compileStylus)

function compileJs () {
    rollup({
        entry: config.js.entry,
        dest: config.js.dest,
        //eslint: config.js.eslint,
        callback: reloadJs
    })
}

function compileStylus () {
    stylus({
        entry: config.stylus.entry,
        dest: config.stylus.dest,
        callback: reloadStylus
    })
}

// function compileCss () {
//     postcss({
//         entry: config.css.entry,
//         dest: config.css.dest,
//         autoprefixer: config.css.autoprefixer,
//         callback: reloadCss
//     })
// }

function reloadJs () {
    browserSync.reload(config.js.dest)
}

function reloadStylus () {
    browserSync.reload(config.stylus.dest)
}

// function reloadCss () {
//     browserSync.reload(config.css.dest)
// }
