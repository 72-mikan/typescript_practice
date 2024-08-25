function calcTax(price:number):[price:number, tax:number] {
  const p:number = price / 1.1;
  const t:number = price - p;
  return [p, t];
}

function printTax(price:number):void {
  const [pr, tx] = calcTax(price);
  console.log(price + "の本体価格：" + pr + "、税額：" + tx);
}

printTax(2750);
printTax(3080);