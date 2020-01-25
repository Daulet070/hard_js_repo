
let num = 266219;
//Число перевожу в строку
const stringArr = num.toString();
console.log(stringArr);
const numIndexArr = [];

//цикл повторяется 6 раз (длина строки 6 симв) добавляя новый индекс каждый раз
for (let i = 0; i < stringArr.length; i++) {
  //добавляю в пустой массив индексы строки stringArr
  numIndexArr.push(stringArr[i]);
}
// Не понял с помощю какой магии это заработало, но работает как нужно вроде бы
//(каждый символ числа отдельно друг от друга теперь в массиве numIndexArr как и требовалось вроде)
console.log(numIndexArr);

//Сидел 2ч но ниче лучше не знаю пока, да смотрится ужасно знаю))
let arrSum = (numIndexArr[0] * numIndexArr[1] * numIndexArr[2] * numIndexArr[3] * numIndexArr[4] * numIndexArr[5]);

//Перевожу объект в число
let resp = +arrSum;

//Возвожу число в степень (это ведь возведение в степень да?)
let respEnd = resp ** 3;
console.log(respEnd);
//Перевожу число обратно в строку и укорачиваю до двух знаков указывая индексы начала и конца
let screenShow = respEnd.toString().substring(0, 2);

//вывод на "экран" понял буквально
document.getElementById("test").innerHTML = screenShow;

//ну и в консоль на всякий
console.log(screenShow);

