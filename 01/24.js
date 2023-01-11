function shuffleIt(arr, ...arr1) {
    for (let i = 0; i < arr1.length; i++) {
      [arr[arr1[i][0]], arr[arr1[i][1]]] = [arr[arr1[i][1]], arr[arr1[i][0]]];
}    
  return arr;
}