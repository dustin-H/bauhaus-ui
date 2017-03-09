var store = {}

export function set(s) {
  Object.assign(store, s)
}

export function get() {
  return store
}
