class ImageLoader {

    checkImage (path) {

        // Take image and load, promise resolves after each image.

        const promise = new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve({path, status: 'ok'})
            img.onerror = () => resolve({path, status: 'error'})
            img.src = path;
        }).then(function(e) {
            console.log(e)
        })

        return promise
    }

}

export default new ImageLoader()
