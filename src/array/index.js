Array.prototype.count = function () {
  return this.length
}

Array.prototype.sum = function () {
  return this.reduce((sum, n) => sum + +n, 0)
}

Array.prototype.avg = function () {
  return this.sum() / this.count()
}

Array.prototype.min = function () {
  return Math.min(...this)
}

Array.prototype.max = function () {
  return Math.max(...this)
}

Array.prototype.each = function (callback) {
  let count = this.count()

  for (let i = 0; i < count; i++) {
    if (callback(this[i], i) === false) {
      break
    }
  }

  return this
}

Array.prototype.first = function (callback = null) {
  if (!callback) {
    return this[0]
  }

  return this.filter(callback)[0]
}

Array.prototype.last = function (callback = null) {
  let array = this

  if (callback) {
    array = array.filter(callback)
  }

  return array[array.count() - 1]
}

Array.prototype.unique = function () {
  return [...new Set(this)]
}

Array.prototype.chunk = function (size) {
  return [...Array(Math.ceil(this.count() / size)).keys()].map(n => this.slice(n * size, (n + 1) * size))
}

Array.prototype.flatten = function () {
  return this.reduce((flatten, toFlatten) => {
    if (Array.isArray(toFlatten)) {
      toFlatten = toFlatten.flatten()
    }

    return flatten.concat(toFlatten)
  }, [])
}

Array.prototype.contains = function (needle) {
  return this.indexOf(needle) !== -1
}
