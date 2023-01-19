var maxSequence = function(arr){
    let sum = 0;
      return arr.reduce((x, z) => Math.max(sum = Math.max(sum + z, 0), x), 0)
    
  }