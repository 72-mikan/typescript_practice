function total(max:number) {
  let num = 0;
  for(let i = 1; i < max; i++) {
    num += i;
  }
  console.log("total:" + (num + i));
}

total(100);
total(200);
total(300);