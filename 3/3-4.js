function total(max) {
    var num = 0;
    for (var i = 1; i < max; i++) {
        num += i;
    }
    return num;
}
function printTotal(n) {
    // let res = total(n);
    // console.log(n + "まで合計：" + res);
    console.log(n + "まで合計：" + total(n));
}
printTotal(123);
printTotal(1234);
printTotal(12345);
