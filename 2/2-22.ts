type name = string;
type mail = string;
type age = number;
type person = [name, mail, age];

const taro:person = ['taro', 'yaro@yamada', 39];
const hanako:person = ['hanako', 'hanako@flower', 28];
const sachiko:person = ['sachiko', 'sachiko@happy', 17];

const data:person[] = [taro, hanako, sachiko];

for(let item of data) {
  console.log(item);
}