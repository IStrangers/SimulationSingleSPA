import { reroute } from "../navigations/reroute"
import { BOOTSTRAPPING, LOADING_SOURCE_CODE, MOUNTED, NOT_BOOTSTRAPPED, NOT_LOADED, NOT_MOUNTED, shouldBeActive, SKIP_BECAUSE_BROKEN } from "./helpers"

const apps = []

function registerApplication(appName,loadApp,activeWhen,customProps) {
  apps.push({
    appName,
    loadApp,
    activeWhen,
    customProps,
    status: NOT_LOADED,
  })
  reroute()
}

function getAppChanges() {
  const appsToUnmount = []
  const appsToLoad = []
  const appsToMount = []
  apps.forEach(app => {
    const appSholdBeActive = shouldBeActive(app)
    switch(app.status) {
      case NOT_LOADED:
      case LOADING_SOURCE_CODE:
        appSholdBeActive && appsToLoad.push(app)
        break
      case NOT_BOOTSTRAPPED:
      case BOOTSTRAPPING:
      case NOT_MOUNTED:
        appSholdBeActive && appsToMount.push(app)
        break
      case MOUNTED:
        !appSholdBeActive && appsToUnmount.push(app)
      default:
        break
    }
  })
  return {appsToUnmount,appsToLoad,appsToMount}
}

export {
  registerApplication,
  getAppChanges,
}