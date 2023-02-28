function sumIntervals(intervals) {
    intervals.sort(function (a, b) {
          return a[0] - b[0]
      })
    
      let x = [intervals[0]]
      let z = intervals[0][1] - intervals[0][0]
      for (let i = 1; i < intervals.length; i++) {
          if (x[x.length - 1][1] < intervals[i][0]) {
              z += intervals[i][1] - intervals[i][0]
              x.push(intervals[i])
          } else if (x[x.length - 1][1] < intervals[i][1]) {
              z += intervals[i][1] - x[x.length - 1][1]
              x[x.length - 1][1] = intervals[i][1]
          }
      }
      return z
  }
