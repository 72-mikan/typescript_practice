const f = (arr?:any[]):void => {
  let res:string = 'Array: ';
  for(let i of arr) {
    res += String(i) + '\t';
  }
  console.log(res);
}

try {
  f(['OK', 'NG']);
  f([10, 20, 30]);
  f();
} catch(e) {
  console.log(e.message);
}
