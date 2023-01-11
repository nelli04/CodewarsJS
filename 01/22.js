function topSecret(str){
    let x = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p',
 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y','z'];
  let y = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P',
 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
   return str.replace(/[a-z]/gi, z => {
   if (z === z.toLowerCase()) {
   return x.indexOf(z.toLowerCase()) - 3 < 0 ?
    x[x.indexOf(z.toLowerCase()) - 3 + 26]
  : x[x.indexOf(z.toLowerCase()) -3 ]}
  if (z === z.toUpperCase()) {
   return y.indexOf(z) - 3 < 0 ?
    y[y.indexOf(z) - 3 + 26]
  : y[y.indexOf(z) - 3]
  }
  return v
   }
  )
 }
 //question1: The top secret file number is...
 answer1="3745";
 //question2: Super agent's name is...
 answer2="RILc";
 //question3: He stole the treasure is...
 answer3="Expired biscuits";