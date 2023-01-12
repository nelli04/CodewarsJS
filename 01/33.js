function maxMin(arr1,arr2) {
    const arr = arr2.map((x, i) => x - arr1[i], 0)
    return [Math.max(...arr.map(x => Math.abs(x))), Math.min(...arr.map(x => Math.abs(x)))]
}