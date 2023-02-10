function computeDepth (x){
    let result = '';
    count = 1;
    while ([...new Set(result)].length < 10) {
      result += x * count;
      count++;
    }
    return count - 1;
  }