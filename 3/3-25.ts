const f = (n:number):number => {
  if(n < 0) {
    throw Error("負の数です。");
  }
  let total = 0;
  for(let i = 1; i < n; i++) {
    total += i;
  }
  return total;
}

let re1 = f(100);
console.log(re1);

let re2 = f(-100);
console.log(re2);