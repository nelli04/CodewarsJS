function cutIt(arr) {
    return arr.map((elem) => elem.slice(0, Math.min(...arr.map(elem => elem.length))))
}