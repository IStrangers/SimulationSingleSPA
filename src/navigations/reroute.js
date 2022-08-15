import { getAppChanges } from "../applications/appliccation"
import { isStarted } from "../start"

function reroute() {
  const { appsToUnmount,appsToLoad,appsToMount } = getAppChanges()
  
  async function performAppChanges() {

  }

  async function loadApps() {

  }

  if(isStarted()) {
    return performAppChanges()
  } else {
    return loadApps()
  }
}

export {
  reroute
}