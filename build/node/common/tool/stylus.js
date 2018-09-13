const fs = require('fs')
const stylus = require('stylus')
const poststylus = require('poststylus')


module.exports = opts => {
    const styleInput = opts.entry
    const styleOutputFilename = 'main.css'
    const styleOutput = opts.dest

    function buildStyles(input, output) {
        stylus(fs.readFileSync(input, 'utf-8'))
            .set('include css', true)
            .set('watch', true)
            .use(poststylus([
                'autoprefixer',
                'postcss-media-minmax'
            ]))
            .render(function(err, css) {
                if (err) throw err;

                fs.writeFile(output, css, (err) => {
                    if (err) throw err;

                    console.log('👍  Stylesheet built successfully.');
                    opts.callback()
                })
            });
    }

    buildStyles(styleInput, styleOutput)
}