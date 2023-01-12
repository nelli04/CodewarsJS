function tailAndHead(arr) {
    const x = [];
    for (let i = 0; i < arr.length - 1; i++) {
        x.push(arr[i] % 10 + Number((arr[i + 1] + '')[0])) 
    }
    return x.reduse((a, b) => a * b);
}