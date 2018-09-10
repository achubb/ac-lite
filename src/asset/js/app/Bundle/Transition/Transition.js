import S from '@ariiiman/s'

class Transition {
    outro() {
        console.log('outro is running')
    }

    hello() {
        console.log('hello')
    }

    page(oldPage, newPage) {
        console.log('PAGE TRANSITION...')
        console.log(newPage)

        oldPage.style.position = 'absolute'

        // Move the page to be loaded outside the frame


        // const animation = new S.M({
        //     el: oldPage,
        //     p: {
        //         opacity: [1, 0]
        //     },
        //     d: 2000,
        //     e: 'io4',
        //     cb: function() {
        //         console.log('callback')
        //     }
        // })
        //
        //
        //
        // animation.play()
    }



}

export default new Transition()
