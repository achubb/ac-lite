import S from '@ariiiman/s'

class Transition {

    outro() {
        console.log('outro is running')
    }

    page(oldPage, newPage) {

        // Move the page to be loaded outside the frame
        newPage.style.transform = 'translate3d(100vw, 0px, 0px)'
        oldPage.style.position = 'absolute'

        // set inTransition to true, to kill clicks when in transition
        window.Penryn.inTransition = true

        // Transition animation for the old or exiting page
        const oldExit = new S.M({
            el: oldPage,
            p: {
                x: [0, -100, 'vw']
            },
            d: 1000,
            e: 'io4',
            cb: function() {
                // Once the animation is complete remove from DOM
                oldPage.parentNode.removeChild(oldPage)
            }
        })
        oldExit.play()

        // Transition animation for the new or incoming page
        const newEnter = new S.M({
            el: newPage,
            p: {
                x: [100, 0, 'vw']
            },
            d: 1000,
            e: 'io4',
            cb: function() {
                // When animation is complete set inTransition back to false
                this.Penryn.inTransition = false
            }
        })
        newEnter.play()
    }
}

export default new Transition()
