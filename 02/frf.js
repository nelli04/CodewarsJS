function noIfsNoButs(a, b) {
    switch(true) {
        case (a == b): 
        return a.toString() + ' is equal to ' + b.toString()
        break;
        case (a > b):
        return a.toString() + ' is greater than ' + b.toString()
        break;
        case (a < b): 
        return a.toString() + ' is smaller than ' + b.toString()
        break;
    }
  }
  //other solution
  var noIfsNoButs = function (a,b) {
    switch (Math.sign(a-b)) {
      case 1: return `${a} is greater than ${b}`;
      case -1:return `${a} is smaller than ${b}`;
      case 0: return `${a} is equal to ${b}`;
    }
  }