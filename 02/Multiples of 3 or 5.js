function solution(number) {
    let x = 0;
      for(let i = 1; i < number; i++) {
          if(i % 3 === 0 || i % 5 === 0) {
              x += i;
          }
      }
      return x;
  }