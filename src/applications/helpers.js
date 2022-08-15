//初始化
const NOT_LOADED = "NOT_LOADED"
//加载资源
const LOADING_SOURCE_CODE = "LOADING_SOURCE_CODE"
//还没有调用bootstarap方法
const NOT_BOOTSTRAPPED = "NOT_BOOTSTRAPPED"
//启动中
const BOOTSTRAPPING = "BOOTSTRAPPING"
//没有调用mount方法
const NOT_MOUNTED = "NOT_MOUNTED"
//正在挂载
const MOUNTING = "MOUNTING"
//挂载完毕
const MOUNTED = "MOUNTED"
//更新中
const UPDATINMG = "UPDATINMG"
//解除挂载
const UNMOUNTING = "UNMOUNTING"
//完全卸载中
const UNLOADING = "UNLOADING"
//加载错误
const LOAD_ERR = "LOAD_ERR"
//
const SKIP_BECAUSE_BROKEN = "SKIP_BECAUSE_BROKEN"

function isActive(app) {
  return app.status === MOUNTED
}

function shouldBeActive(app) {
  return app.activeWhen(window.location)
}

export {
  NOT_LOADED,
  LOADING_SOURCE_CODE,
  NOT_BOOTSTRAPPED,
  BOOTSTRAPPING,
  NOT_MOUNTED,
  MOUNTING,
  MOUNTED,
  UPDATINMG,
  UNMOUNTING,
  UNLOADING,
  LOAD_ERR,
  SKIP_BECAUSE_BROKEN,
  isActive,
  shouldBeActive,
}