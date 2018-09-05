import ImageLoader from '../../Core/ImageLoader.js'

class Loader {
    
    run() {
        
        // Get all the images that are passes in and pass to checkImage
        // to load and verify image exists. Promise resolves after all
        // images are loaded

        const imgToLoad = ['/media/img/alexandru.jpg', '/media/img/schneider.jpg']

        const loaded = Promise.all(imgToLoad.map(ImageLoader.checkImage)).then(function(e){
            console.log('Images Loaded...')
        })

        return loaded 


    }

}

export default new Loader()
