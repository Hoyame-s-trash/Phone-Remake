import Vue from 'vue'
import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'
TimeAgo.addLocale(fr)
const timeAgo = new TimeAgo('fr-FR')

import ipc from './ipc.js'
import EventManager from './EventManager.js'
import AppController from './AppController'
import utils from './js/Utils.js'

import('./dragAndDrop.js');
import('./assets/style.css')
import('./assets/css/tooltip.css')
import('./assets/css/dragStyle.css')
import('./font-awesome-kit.js')

Vue.config.productionTip = false
let controller = new AppController()


Vue.prototype.$controller = controller // for use in instance of vue
Vue.prototype.$eventManager = EventManager
Vue.prototype.$itemsList = {} // for inventory
Vue.prototype.$ipc = ipc
Vue.prototype.$utils = utils

window.controller = controller // for use in console or in alt
window.eventManager = EventManager
window.ipc = ipc

Vue.filter('time', function (value) {
  const date = new Date(value)
	return timeAgo.format(date)
})

Vue.directive('click-outside',  {
  bind: function(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) { warn += `Found in component '${compName}'` }
      
      console.warn(warn)
    }
    // Define Handler and cache it on the element
    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = handler

    // add Event Listeners
    document.addEventListener('click', handler)
  },
  
  unbind: function(el, binding) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null

  }
});

Vue.filter('rev', function(value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse();
});


document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false);

if('alt' in window) {
  alt.on('loadApp', function(appName,params){
    controller.loadApp(appName,params);
  });

  alt.on('loadAppAsync', function(appName,params){
    controller.loadApp(appName,params)
    alt.emit("appIsLoaded",appName);
  });

  alt.on('loadScreenApp', function(appName,params,template){
    controller.loadOnScreen(appName, params, template)
  })

  alt.on('callEvent', function(event,...args){
    EventManager.callEvent(event,...args)
  });

  alt.on('destroyApp', function(appName){
    controller.destroyApp(appName)
  });

  alt.on('changeAppView', function(appName,pageName,params){
    controller.changePage(appName,pageName,params)
  })

  alt.on('initItemsList', function(itemsList, craftList){
    Vue.prototype.$itemsList = itemsList;
    Vue.prototype.$craftList = craftList;
  });

  window.addEventListener('load', function(){
    alt.emit('uiReady');
  });

  /*
  window.addEventListener("keyup", event => {
    ipc.send("uitestCb", function(val1,val2){
      console.log(val1)
      console.log(val2)
    })
    // do something
  });
  */
}

/*
window.addEventListener('message', (event) => {
  let data = event.data
  if (typeof data.uiView === 'undefined'){ return }
  if(data.action == 'loadApp') {
    console.log(data)
    controller.loadApp(data.params.appName, data.params.arg);
  }

  if(data.action == 'callEvent') {
    EventManager.callEvent(data.params.event,...data.params.arg)
  }

  if(data.action == 'changePage') {
    controller.changePage(data.params.appName, data.params.page, data.params.arg);
  }

  if(data.action == 'destroyApp') {
    controller.destroyApp(data.params.appName);
  }

  if(data.action == "keyDown") {
    console.log("key down")
    controller.triggerKey(data.params.key);
  }

})
window.addEventListener('load', function(){
  EventManager.callGameEvent('http://webview/callevent', JSON.stringify({
    event: {type:"client", name:"onWebViewLoad"},
    arg: {}})
  );
}, false)

*/