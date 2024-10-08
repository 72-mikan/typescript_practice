const f = (n:number, d:number):Promise<number> => {
  console.log("start:" + n);
  return new Promise((f) => {
    let total = 0;
    for(let i = 1; i <= n; i++) {
      total += i;
      setTimeout(() => {
        f(total);
      }, d)
    }
  })
}

const cb = (n:number) => {
  console.log("result:" + n);
}

f(10, 300).then(cb);
f(100, 200).then(cb);
f(1000, 100).then(cb);

console.log("do something....");