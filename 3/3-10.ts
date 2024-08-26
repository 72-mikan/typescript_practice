const f = (...data:number[]):number => {
  let total = 0;
  for(let i of data) {
    total += i;
  }
  return total;
}

console.log(f(1, 2, 3, 4, 5));
console.log(f(10, 20, 30, 40, 50, 60, 70, 80, 90));
console.log(f(123, 456, 78, 90));