function isValidWalk(walk) {
    function x (val) {
        return walk.filter(function(y) {
            return y == val;
        }).length;
    }
    return walk.length == 10 && x('n') == x('s') && x('w') == x('e');
}