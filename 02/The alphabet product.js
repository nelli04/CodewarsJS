function alphabet(ns) {
    ns = ns.sort((a, b) => a - b)
    for (let i = 0; i < ns.length - 1; i++) {
      const y = ns[i] * ns[i + 1]
      const z = ns.indexOf(y)
      if (z !== -1) {
        ns.splice(z, 1)
     }
    }
     return ns[3];
   }
