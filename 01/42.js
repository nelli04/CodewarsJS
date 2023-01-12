function thinkingAndTesting(number,base) {
    return number - base ** (Math.log(number) / Math.log(base) ^ 0)
}