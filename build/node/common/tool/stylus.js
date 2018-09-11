const fs = require('fs')
const stylus = require('stylus')

module.exports = opts => {
    const css = fs.readFileSync(opts.entry, 'utf8')

    postcss([
        easyImport({
            partial: false,
            extensions: ['.css'],
            glob: true
        }),
        mixins,
        simpleVars,
        nested,
        autoprefixer({browsers: opts.autoprefixer}),
        minmax,
        mqpacker,
        position,
        responsiveFont
    ]).process(css, {
        from: opts.entry
    }).then(result => {
        fs.writeFileSync(opts.dest, result.css)
    }).then(() => {
        opts.callback()
    }).catch(error => {
        showError(error)
    })
}
