var f = function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var i = data_1[_a];
        total += i;
    }
    return total;
};
console.log(f(1, 2, 3, 4, 5));
console.log(f(10, 20, 30, 40, 50, 60, 70, 80, 90));
console.log(f(123, 456, 78, 90));
