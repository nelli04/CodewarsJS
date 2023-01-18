var uniqueInOrder=function(iterable){
    let x = [];
    for (let i= 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        x.push(iterable[i])
      }
    }
    return x;
  }