var f = function (n) {
    var count = 0;
    return function () {
        count += n;
        return count;
    };
};
var f1 = f(1);
var f2 = f(2);
var f3 = f(3);
for (var i = 0; i < 10; i++) {
    console.log(f1() + '\t' + f2() + '\t' + f3());
}
