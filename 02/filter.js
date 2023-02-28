function filter_list(l) {
    var integers = []
    for(let i = 0; i < l.length; i++){
    if(Number.isInteger(l[i])){
    integers.push(l[i])
      } 
    }
    return integers
  }

  //other solution
  function filter_list(l) {
    return l.filter(f => typeof f == 'number')
  }