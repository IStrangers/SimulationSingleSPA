import { getAppChanges } from "../applications/appliccation"
import { toBootstrapPromise } from "../lifecycles/bootstrap"
import { toLoadPromise } from "../lifecycles/load"
import { toMountPromise } from "../lifecycles/mount"
import { toUnmountPromise } from "../lifecycles/unmount"
import { isStarted } from "../start"
import {} from "./navigatorEvents"

function reroute() {
  const { appsToUnmount,appsToLoad,appsToMount } = getAppChanges()
  
  async function performAppChanges() {
    const unmountPromises = appsToUnmount.map(toUnmountPromise)
    appsToLoad.map(async (app) => {
      app = await toLoadPromise(app)
      app = await toBootstrapPromise(app)
      return toMountPromise(app)
    })
    appsToMount.map(async (app) => {
      app = await toBootstrapPromise(app)
      return toMountPromise(app)
    })
  }

  async function loadApps() {
    const apps = await Promise.all(appsToLoad.map(toLoadPromise))
    return apps
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