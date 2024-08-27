const f = (arr?:any[]):void => {
  let res:string = 'Array: ';
  for(let i of arr) {
    res += String(i) + '\t';
  }
  console.log(res);
}

f(['OK', 'NG']);
f([10, 20, 30]);
f();