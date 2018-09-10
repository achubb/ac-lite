import S from '@ariiiman/s'
import Transition from '../app/Bundle/Transition/Transition.js'

class Fetch {

    loadPage (url) {
        console.log('LOADPAGE ' + url)
        return fetch(url, {
            method: 'GET'
        }).then(function(response) {
            return response.text()
        })
    }

    changePage () {
        console.log('CHANGEPAGE')

        const xhrStage = document.querySelector('#xhr')
        console.log(xhrStage)

        // The URL should already be changed
        const url = window.location.href

        this.loadPage(url).then(function(responseText) {
            console.log('chgpg')
            const wrapper = document.createElement('div')
                  wrapper.innerHTML = responseText

            const oldCont = document.querySelector('.xPage')
            const newCont = wrapper.querySelector('.xPage')

            xhrStage.appendChild(newCont);
            console.log('done')
            Transition.page(oldCont, newCont)
        })
    }

}

export default new Fetch()
