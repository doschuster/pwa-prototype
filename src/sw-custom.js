importScripts('./ngsw-worker.js');

(function () {
    'use strict';

    self.addEventListener('fetch', function(event) {
        console.log(event)
        event.respondWith(
          caches.match(event.request)
        );
      });

    // self.onsync = function(event) {
    //     if(event.tag == 'example-sync') {
    //         this.console.log('sw sync')
    //         // event.waitUntil(sendToServer());
    //     }
    // }
    
    // //service-worker.js
    // self.addEventListener('fetch', function(event) {
    //     console.debug('sw event')
    //     console.debug(event)
    //     if(event.request.method === "POST"){
    //         this.console.log('sw POST')
    //        var newObj = {};
    
    //              event.request.formData().then(formData => {
    
    //               for(var pair of formData.entries()) {
    //                 var key = pair[0];
    //                 var value =  pair[1];
    //                 newObj[key] = value;
    //               }
    
    //             }).then(console.log(newObj) )
    //     }
    // })
  }());