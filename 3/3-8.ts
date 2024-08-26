function printPerson(name?:string, age?:number):void {
  const nameval:string = name ? name : "no-name";
  const ageval:string = age ? String(age) : '-';
  console.log('Name:' + nameval + ' (' + ageval + ')');
}

printPerson("taro", 39);
printPerson("hanako");
printPerson();