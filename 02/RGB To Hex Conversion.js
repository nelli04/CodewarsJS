function rgb(r, g, b){
    function x (a) {
      if (a > 255) {
        return 'FF';
      } else if (a < 0) {
        return '00'
      } else {
        return a.toString(16).padStart(2, '0').toUpperCase();
      }
    } 
    return x(r) + x(g) + x(b);
  }