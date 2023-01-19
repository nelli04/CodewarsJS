function smartSum(){
    const x = [...arguments];
       let result = 0;
   
       for (let i = 0; i < x.length; i++) {
           if (Array.isArray(x[i])) {
               result += smartSum(...x[i]);
           } else {
               result += x[i];
           }
       }
   
       return result;
   }