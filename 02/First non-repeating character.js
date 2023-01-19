    function firstNonRepeatingLetter(s) {
        for(let i = 0; i < s.length; i++) {
          let x = s.toLowerCase()
          if(s.length == 1) {
            return s
          } else if(x.indexOf(x[i]) === x.lastIndexOf(x[i])) {
            return s[i]
          }
        }
        return ''
      }
      