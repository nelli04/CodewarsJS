function xor(a, b) {
    return a !== b
  }

  //other solution 
  function xor(a, b) {
    if ((a === true) && (b !== true)){
    return true
    } else if ((a !== true) && (b === true)){
    return true
    } else {
    return false
    }
  }