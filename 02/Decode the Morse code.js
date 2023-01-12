decodeMorse = function(morseCode) {
    function decodeMorseX(x) {
        return MORSE_CODE[x];
    }
    function decodeMorseY(y) {
        return y.split(' ').map(decodeMorseX).join('');
    }
    return morseCode.trim().split('  ').map(decodeMorseY).join(' ');
}