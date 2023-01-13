function persistence(num) {
    let x = 0;
    while(num.toString().length > 1) {
      num = num.toString().split('').reduce((a, b) => a *= + b, 1)
      x++;
    }
    return x;
  }