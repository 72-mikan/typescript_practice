const data:number[] = [100, 98, 76, 59, 87] as const;
let total:number = 0;
for(let item of data) {
  total += item;
}
const average = total / data.length
console.log('合計：' + total);
console.log('平均：' + average);