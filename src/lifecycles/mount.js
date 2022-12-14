import { MOUNTED, MOUNTING, NOT_MOUNTED } from "../applications/helpers"

async function toMountPromise(app) {
  if(app.status !== NOT_MOUNTED) {
    return app
  }
  app.status = MOUNTING
  await app.mount(app.customProps)
  app.status = MOUNTED
  return app
}

export {
  toMountPromise,
}