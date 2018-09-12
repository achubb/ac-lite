const fs = require('fs')
const stylus = require('stylus')
const poststylus = require('poststylus')
// const easyImport = require('postcss-easy-import')

module.exports = opts => {
    //const str = fs.readFileSync(__dirname + '/test.styl', 'utf8');

    //const styl = fs.readFileSync()

    // postcss([
    //     easyImport({
    //         partial: false,
    //         extensions: ['.css'],
    //         glob: true
    //     }),
    //     mixins,
    //     simpleVars,
    //     nested,
    //     autoprefixer({browsers: opts.autoprefixer}),
    //     minmax,
    //     mqpacker,
    //     position,
    //     responsiveFont
    // ]).process(css, {
    //     from: opts.entry
    // }).then(result => {
    //     fs.writeFileSync(opts.dest, result.css)
    // }).then(() => {
    //     opts.callback()
    // }).catch(error => {
    //     showError(error)
    // })

    // const styleInput = __dirname + '/dev/stylus/main.styl'
    const styleInput = opts.entry
    const styleOutputFilename = 'main.css'
    // const styleOutput = __dirname + '/static/' + styleOutputFilename
    const styleOutput = opts.dest
    // const stylusPaths = [__dirname + '/dev/stylus', __dirname + '/dev/stylus/libs']

    console.log('STYLEINPUT ' + styleInput)
    console.log('OPT-ENTRY ' + opts.entry)
    console.log('STYLEOUTPUTFILENAME ' + styleOutputFilename)
    console.log('STYLEOUTPUT ' + styleOutput)
    console.log('OPT-OUTPUT ' + opts.dest)
    // console.log('STYLUSPATHS ' + stylusPaths)


    function buildStyles(input, output) {
        stylus(fs.readFileSync(input, 'utf-8'))
            // .set('paths', paths)
            .set('include css', true)
            .set('watch', true)
            .use(poststylus([
                // easyImport({
                //     partial: false,
                //     extensions: ['.css'],
                //     glob: true
                // }),
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
