function printPerson(name, age) {
    if (name === void 0) { name = "no-name"; }
    var ageval = age ? String(age) : '-';
    console.log('Name:' + name + ' (' + ageval + ')');
}
printPerson("taro", 39);
printPerson("hanako");
printPerson();
