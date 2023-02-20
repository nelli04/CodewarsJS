function strCount(str, letter){  
    let arr = str.split('').filter(s => letter === s)
    return arr.length
    //let result = arr.filter
  }

  //other solution
  function strCount(str, letter){  
  return str.split(letter).length-1
}