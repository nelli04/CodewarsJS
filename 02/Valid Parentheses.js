function validParentheses(parens) {
    let x = [];
    let y = parens.length;
    let z = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
    for (let i = 0; i < y; i++) {
      if (x.length > 0 && z[x[x.length - 1]] === parens[i]) {
        x.pop();
      } else {
        x.push(parens[i]);
      }
    }
    return x.length === 0;
  }