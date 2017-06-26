export function randomTest (num, min = 0) {
  return Math.floor(Math.random() * num) + min
}

export function sleep (time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time * 1000)
  })
}

export function getTime () {
  return new Date().getTime()
}