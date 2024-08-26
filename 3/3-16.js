var f = function (n) {
    var inF = function (n) {
        console.log("value:" + n);
    };
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
        inF(total);
    }
};
f(10);
