import { MOUNTED, NOT_MOUNTED, UNMOUNTING } from "../applications/helpers";

async function toUnmountPromise(app) {
  if(app.status !== MOUNTED) {
    return app
  }
  app.status = UNMOUNTING
  await app.unmount(app.customProps)
  app.status = NOT_MOUNTED
  return app
}

export {
  toUnmountPromise,
}