function solution(s, t) {
  let x = s * t,
        y = Math.ceil(t / 2)
  for (let i = 0; i < y; i++) {
    if (s - 3 * i > 0) {
      x += s - 3 * i;
    }
  }
  return x;
}
