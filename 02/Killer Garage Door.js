function door(events) {
    const x = 5;
      const y = 0;
      let value = 0;
      let z = 0;
      let c = true;
  
      return events.split("").reduce((result, event) => {
          if (event === "P") {
              if (value === y) {
                  c = true;
                  z = 1;
              } else if (value === x) {
                  c = false;
                  z = -1;
              } else if (z !== 0) {
                  z = 0;
              } else {
                  z = c ? 1 : -1;
              }
          }
  
          if (event === "O") {
              c = !c;
              z *= -1;
          }
  
          value += z;
          value = value > x ? x : value < y ? y : value;
  
          return `${result}${value}`;
      }, '');
  } 
  