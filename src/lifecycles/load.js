import { LOADING_SOURCE_CODE, NOT_BOOTSTRAPPED } from "../applications/helpers"

function flattenFnArray(fns) {
  fns = Array.isArray(fns) ? fns : [fns]
  return function(props) {
    return fns.reduce((p,fn) => p.then(() => fn(props)),Promise.resolve())
  }
}

async function toLoadPromise(app) {
  if(app.loadPromise) {
    return app.loadPromise
  }
  return (app.loadPromise = Promise.resolve().then(async () => {
    app.status = LOADING_SOURCE_CODE
    const { bootstrap,mount,unmount } = await app.loadApp(app.customProps)
    app.status = NOT_BOOTSTRAPPED
    app.bootstrap = flattenFnArray(bootstrap)
    app.mount = flattenFnArray(mount)
    app.unmount = flattenFnArray(unmount)
    delete app.loadPromise
    return app
  }))
}

export {
  toLoadPromise,
}