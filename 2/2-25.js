var idA = "taro";
var idB = 123;
var tp = true;
switch (typeof (tp)) {
    case "number":
        console.log(tp + "は、number型です。");
        break;
    case "string":
        console.log(tp + "は、string型です。");
        break;
    default:
        console.log("型不明");
}
