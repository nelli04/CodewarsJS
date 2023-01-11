function threeInOne(arr){
    const x = [];
    for (let i = 0; i <= arr.length; i += 3) {
      x.push(arr.slice(i, i + 3))
    }
    return x.map(elem => elem.reduce((a, b) => a + b, 0)).slice(0, -1)
  }