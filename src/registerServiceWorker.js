/* eslint-disable no-console */

import { register } from 'register-service-worker'

const notifyUSerAboutUpdate = worker => {
  if (confirm('update detected!')) {
    worker.postMessage({ action: 'skipWaiting' })
  }
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      // alert('New content is downloading.')
      console.log('New content is downloading.')
    },
    updated (registration) {
      // alert('New content is available; please refresh.')
      console.log('New content is available; please refresh.')
      notifyUSerAboutUpdate(registration.waiting)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

  let refershing
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (!refershing) {
      window.location.reload(true)
      refershing = true
    }
  })
}
