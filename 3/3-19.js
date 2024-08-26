var func = function (n, f) {
    var res = f(n);
    console.log("Result: " + res);
};
var double = function (n) { return n * 2; };
var word = function (n) {
    var w = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    var s = String(n);
    var res = [];
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        res.push(w[Number(c)]);
    }
    return res.join('');
};
var num = 1230;
func(num, double);
func(num, word);
