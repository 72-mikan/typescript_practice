function getRnd(values) {
    var r = Math.floor(Math.random() * values.length);
    return values[r];
}
var data1 = [0, 2, 4, 6, 8, 10];
var data2 = ['グー', 'チョキ', 'パー'];
var data3 = [true, false];
for (var i = 0; i < 10; i++) {
    var re1 = getRnd(data1);
    var re2 = getRnd(data2);
    var re3 = getRnd(data3);
    var res = re1 + '(' + typeof (re1) + ')\t'
        + re2 + '(' + typeof (re2) + ')\t'
        + re3 + '(' + typeof (re3) + ')\t';
    console.log(res);
}
