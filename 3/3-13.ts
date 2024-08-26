const f1 = function(name:string):void {
  console.log("Hello," + name + "!");
}

const f2 =(name:string):void => {
  console.log("Hello, " + name + "!");
}

console.log(typeof(f1));
console.log(typeof(f2));