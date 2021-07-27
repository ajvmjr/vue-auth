const { parse, stringify } = JSON

export const getStorage = key => {
  if(!window) return
  return parse(window.localStorage.getItem(key))
}

export const setStorage = (key, value) => {
  if(!window) return
  window.localStorage.setItem(key, stringify(value))
}