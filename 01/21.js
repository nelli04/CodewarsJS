function alienLanguage(str) {
    return str.split(' ').map(elem => elem.slice(0, -1).toUpperCase() + elem.slice(-1)).toLowerCase.join(' ');
}