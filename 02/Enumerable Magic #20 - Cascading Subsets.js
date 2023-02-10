function eachCons(array, n) {
    const result = [];
    for (let i = 0; i <= array.length - n; i++) {
        const each = [];
        for (let j = i; j < i + n; j++) {
            each.push(array[j])
        }
        result.push(each)
    }
    return result
}