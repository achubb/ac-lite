import Loader from '../Bundle/Transition/Loader.js'
//import Transition from '../Bundle/Transition/Transition.js'

class P404 {

    preload () {
        Loader.run()
    }

    outro () {
        //Transition.outro()
        console.log('transition outro')
    }

}

export default new P404()
