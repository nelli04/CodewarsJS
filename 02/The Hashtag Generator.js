function generateHashtag (str) {
  
    if(str.trim() === '') {
      return false
    }
    const x = str.split(' ').map(z => z.charAt(0).toUpperCase() + z.slice(1)).join('');
    const y = `#${x.trim()}`;
    return y.length > 140 ? false : y;
  }