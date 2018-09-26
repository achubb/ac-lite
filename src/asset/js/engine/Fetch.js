import S from '@ariiiman/s'
import Transition from '../app/Bundle/Transition/Transition.js'

class Fetch {

    loadPage (url) {
        // Fetch the requested url and return the response
        return fetch(url, {
            method: 'GET'
        }).then(function(response) {
            return response.text()
        })
    }

    changePage () {
        const w = window
        const xhrStage = document.querySelector('#xhr')
        const url = w.location.href // The URL should already be changed
        const p = Penryn

        // Only change the page if not currently inTransition
        if (!p.inTransition) {
            this.loadPage(url).then(function(responseText) {
                const wrapper = document.createElement('div')
                      wrapper.innerHTML = responseText

                const oldCont = document.querySelector('.xPage')
                const newCont = wrapper.querySelector('.xPage')

                xhrStage.appendChild(newCont);
                Transition.page(oldCont, newCont)
            })
        }
        
    }

}

export default new Fetch()
