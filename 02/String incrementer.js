function incrementString (strng) {
    const x = /\d$/g
    return x.test(strng) ? strng.replace(/\d+$/, z => String((+z + 1)).padStart(z.length, 0)) :  strng + '1'
  }