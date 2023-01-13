multiplicationTable = function(size) {
  let a = []
  for(let i = 1; i<=size; i++){
    let x = []
    for(let j = 1; j<=size; j++){
      x.push(i*j)
    }
    a.push(x)
  }
  return a
}
