function findSimilarity(str,word){
    const x = word[0]
    +word.slice(1, -1).replace(/./g,'.')
    +word.slice(-1);
    const y = new RegExp('^' + x + '$')
    return str.split(' ').filter(c => y.test(c)).join(' ')
  }