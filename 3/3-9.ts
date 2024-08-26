function printPerson(name:string = "no-name", age?:number):void {
  const ageval:string = age ? String(age) : '-';
  console.log('Name:' + name + ' (' + ageval + ')');
}

printPerson("taro", 39);
printPerson("hanako");
printPerson();