type data = [string, number];
type ReqData = Readonly<data>

const x:data = ["taro", 39];
const y:ReqData = ["hanako", 28];
const z:data = ["kato", 50] as const;

x[1] = 28;
// y[1] = 17;
// y.pop();
z.pop();

console.log(x);
console.log(y);
console.log(z);