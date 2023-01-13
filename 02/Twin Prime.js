function isTwinPrime(n) {
    function isPrime(x) {     
         let y = x-1;
         while (y > 1) {
           if ((x % y) == 0) 
             return false;
           y--;
         }
         return x > 1
   }
   
     if(!isPrime(n)) 
       return false
   
     if(isPrime(n - 2) || isPrime(n + 2)) {
       return true
     }
   
     return false
   }