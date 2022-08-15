import { reroute } from "./navigations/reroute"

let started = false
function isStarted() {
  return started
}

function start() {
  started = true
  reroute()
}

export {
  start,
  isStarted,
}