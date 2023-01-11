function splitAndMerge(string, separator) {
    return string.split(' ').map(elem => elem.split('').join(separator).join(' '))
}