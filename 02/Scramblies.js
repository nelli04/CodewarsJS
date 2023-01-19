function scramble(str1, str2) {
    const x = str2.split('').reduce((z, y) => {
      if (!z[y]) z[y] = 1;
      else z[y]++;
      return z;
    }, {});
    
    for (const y of str1) {
      if (x[y] && x[y] !== 0) x[y]--;
    }
    
    for (const key in x) {
      if (x[key] !== 0) return false;
    }
    
    return true;
  }
  
  
  