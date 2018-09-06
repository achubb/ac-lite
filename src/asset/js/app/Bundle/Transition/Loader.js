import ImageLoader from '../../Core/ImageLoader.js'
import S from '@ariiiman/s'

class Loader {
    
    run() {
        
        // Get all the images that are passes in and pass to checkImage
        // to load and verify image exists. Promise resolves after all
        // images are loaded

        const imgToLoad = ['/media/img/alexandru.jpg', '/media/img/schneider.jpg']

        const loaded = Promise.all(imgToLoad.map(ImageLoader.checkImage)).then(function(e){
            console.log('Images Loaded...')

            // Example Animation Here, Move This Later...

            const animation = new S.M({
                el: '#loader',
                p: {
                    x: [0, 100, 'vw']
                },
                d: 2000,
                e: 'io4'
            })
            animation.play()
        })

        return loaded 


    }

}

export default new Loader()
