const func = (n:number, f(n:number)=>number|string):void => {
  let res = f(n);
  console.log("Reault: " + res);
}