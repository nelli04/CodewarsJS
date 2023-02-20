function mygcd(x,y){
    if (y === 0) {
      return x
    }
    return mygcd(y, x % y)
  }

  //other solution
  function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
  }