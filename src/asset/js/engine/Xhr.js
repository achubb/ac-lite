/*

CONTROLLER
──────────

Xhr.controller(pageName, myCallback, args);

function myCallback(response, args) {

    // Insert HTML
    app.insertAdjacentHTML('beforeend', response);

}

ONPOPSTATE
──────────

Xhr.onPopstate()

*/


import S from '@ariiiman/s'
import Fetch from './Fetch.js'
import Helper from './Helper.js'

class Xhr {

    static controller (page, cb, args) {
        const path = 'index.php?url=' + page + '&xhr=true'
        const xhr = new XMLHttpRequest()

        xhr.open('GET', path, true)

        xhr.onreadystatechange = _ => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const xhrC = JSON.parse(xhr.responseText).xhrController

                S.G.tag('title')[0].textContent = xhrC.title

                getHistoryUpdate()
                cb(xhrC.view, args)
            }
        }
        xhr.send(null)

        // Browser history update
        function getHistoryUpdate () {
            const pageUrl = page === 'home' ? '/' : page

            history.pushState({key: 'value'}, 'title', pageUrl)
        }
    }

    static onPopstate () {
        const d = document
        const w = window
        const c = 'complete'
        const a = 'add'
        const p = Penryn

        let blockPopstateEvent = d.readyState !== c


        // Load Listener
        S.L(w, a, 'load', load)
        // Popstate Listener
        S.L(w, a, 'popstate', popstate)

        function load () {
            setTimeout(_ => {
                blockPopstateEvent = false
            }, 0)
        }

        function popstate (e) {
            e.preventDefault()
            e.stopImmediatePropagation()
            Fetch.changePage()
        }

        w.onpopstate = e => {
            w.location.href = S.Win.path
        }
    }

}

export default Xhr
