function dirReduc(arr){
    let x = arr.join("")
     let z = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g
     while(z.test(x)) {
         x = x.replace(z, '')
     }
 
     return x.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
 }