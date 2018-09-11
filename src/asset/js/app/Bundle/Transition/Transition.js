import S from '@ariiiman/s'

class Transition {

    outro() {
        console.log('outro is running')
    }

    page(oldPage, newPage) {
        console.log('PAGE TRANSITION...')

        // oldPage.style.position = 'absolute'
        newPage.style.transform = 'translate3d(100vw, 0px, 0px)'

        // set inTransition to true
        console.log(window.Penryn.inTransition)
        window.Penryn.inTransition = true

        // Move the page to be loaded outside the frame


        const oldExit = new S.M({
            el: oldPage,
            p: {
                x: [0, -100, 'vw']
            },
            d: 1000,
            e: 'io4',
            cb: function() {
                oldPage.parentNode.removeChild(oldPage)
            }
        })
        oldExit.play()

        const newEnter = new S.M({
            el: newPage,
            p: {
                x: [100, 0, 'vw']
            },
            d: 1000,
            e: 'io4',
            cb: function() {
                console.log(this)
                this.Penryn.inTransition = false
            }
        })
        newEnter.play()
    }
}

export default new Transition()
