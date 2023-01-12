function roundIt(n) {
    return (x => x < 0 ? Math.ceil(n) : x > 0 ? Math.floor(n) : Math.round(n))
    (String(n).split('.').reduce((y, z) => y.length - z.length))
 }