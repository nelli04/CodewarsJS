function findUniq(arr) {
    const x = arr.filter((item, index) => arr.indexOf(item) !== index)
    return arr.filter((item) => item !== x[0])[0]
  }
  