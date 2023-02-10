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

//other solution

function eachCons(array, n) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array.slice(i, i + n))
    }
    return result.filter(e => e.length === n)
}

//other solution

function eachCons(array, n) {
    return array.map((result, each) => array.slice(each, each + n)).filter(result => result.length == n))
}
