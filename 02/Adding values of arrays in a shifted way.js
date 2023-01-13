function addingShifted (arrayOfArrays, shift) {
    let x = [];
    for (let i = 1; i < arrayOfArrays.length; i++) {
        let y = 0;
        while (y < shift * i) {
            arrayOfArrays[i].unshift(0);
            y++
        }
    }
    x = arrayOfArrays.pop();
    for (j = 0; j < arrayOfArrays.length; j++) {
        for (z = 0; z < arrayOfArrays[j].length; z++) {
            x[z] = x[z] + arrayOfArrays[z][j];
        }
    }
    return x;
}