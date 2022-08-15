import { reroute } from "./reroute"

const originalAddEventListener = window.addEventListener
const originalRemoveEventListener = window.removeEventListener
const routingEventsListeningTo = ["hashchange","popstate"]
const captredEventListeners = {
  hashchange: [],
  popstate: [],
}
window.addEventListener = function(eventName,fn) {
  if(routingEventsListeningTo.includes(eventName) && !captredEventListeners[eventName].includes(fn)) {
    captredEventListeners[eventName].push(fn)
    return
  }
  return originalAddEventListener.apply(this,arguments)
}
window.removeEventListener = function(eventName,fn) {
  if(routingEventsListeningTo.includes(eventName)) {
    captredEventListeners[eventName] = captredEventListeners[eventName].filter(f => f !== fn)
    return
  }
  return originalRemoveEventListener.apply(this,arguments)
}

function urlReroute() {
  reroute([],arguments)
}

routingEventsListeningTo.forEach(eventName => {
  window.addEventListener(eventName,urlReroute)
})

function patchedUpdateState(updateState,methodName) {
  return function() {
    const urlBefore = window.location.href
    updateState.apply(this,arguments)
    const urlAfter = window.location.href
    if(urlBefore !== urlAfter) {
      urlReroute(new PopStateEvent("popstate"))
    }
  }
}

window.history.pushState = patchedUpdateState(window.history.pushState,"pushState")
window.history.replaceState = patchedUpdateState(window.history.replaceState,"replaceState")

function getCaptredEventListeners() {
  return captredEventListeners
}

export {
  getCaptredEventListeners,
}