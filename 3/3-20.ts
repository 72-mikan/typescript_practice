const f = (tax:number):(n:number) => number => {
  return (n:number) => n * (1 + tax);
}

const f1 = f(0.1);
const f2 = f(0.08);

const price = 123400;
console.log(f1(price));
console.log(f2(price));