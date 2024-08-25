var hands = {
    goo: 'グー',
    choki: 'チョキ',
    paa: 'パー',
};
var you = hands.goo;
switch (you) {
    case hands.goo:
        console.log('あいこです');
        break;
    case hands.choki:
        console.log('勝ち、、、');
        break;
    case hands.paa:
        console.log('負けww');
        break;
}
