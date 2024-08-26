var func = function (n, f) {
    var res = f(n);
    console.log("Result: " + res);
};
var double = function (n) { return n * 2; };
var total = function (n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};
var num = 100;
func(num, double);
func(num, total);
