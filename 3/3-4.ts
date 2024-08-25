function total(max:number):number {
  let num = 0;
  for(let i = 1; i < max; i++) {
    num += i;
  }
  return num;
}

function printTotal(n:number):void {
  // let res = total(n);
  // console.log(n + "まで合計：" + res);
  console.log(n + "まで合計：" + total(n));
}

printTotal(123);
printTotal(1234);
printTotal(12345);