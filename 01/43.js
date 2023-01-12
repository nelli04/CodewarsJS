function rndCode(){
    const x = Math.random, 
          y ='ABCDEFGHIJKLM',
          z = '~!@#$%^&*'
    return [...Array(8)].map((c, i) => i < 2 ? y[x() * 13 | 0] : i < 6 ? x() * 10 | 0 : z[x() * 9 | 0]).join('')
  }