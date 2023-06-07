function digitalRoot(n) {
    if (n < 10) return n;
    while (n > 9) {
      const x = String(n).split('').map(Number);
      n = x.reduce((y, z) => y + z);
    }
    console.log('n - ',n);
    return n;
  }
