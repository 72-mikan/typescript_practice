var f = function (n) {
    if (n < 0) {
        throw Error("負の数です。");
    }
    var total = 0;
    for (var i = 1; i < n; i++) {
        total += i;
    }
    return total;
};
try {
    var re1 = f(100);
    console.log(re1);
    var re2 = f(-100);
    console.log(re2);
}
catch (e) {
    console.log(e.message);
}
