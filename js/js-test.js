// Задаем/получаем число
let num = 266219;

//Число перевожу в строку
let stringArr = num.toString();

// Создаем пустой массив
let numIndexArr = [];

// Создаем произвольную не пустую переменную
let arrSum = 1;

// Цикл повторяется 6 раз (длина строки 6 симв) добавляя новый индекс каждый раз
for (let i = 0; i < stringArr.length; i++) {
  // Добавляю в пустой массив numIndexArr значения по индексу строки stringArr
    numIndexArr.push(stringArr[i]);
}

/* Перемножаем полученные значения в массиве numIndexArr 
посредствам перебора элементов через map ипользуя присваевание с умножением */
numIndexArr.map(el => arrSum *= el);
console.log(`arrSum : ${arrSum}`);
// Операция с преобразованием в число и присваеванием в переменную
const resp = +arrSum;

// Возвожу число в третю степень при помощи оператора (**)
const respEnd = resp ** 3;
console.log(`respEnd : ${respEnd}`);
// По условию теста перевожу число обратно в строку и укорачиваю до двух знаков указывая индексы начала и конца
const screenShow = respEnd.toString().substring(0, 2);

// Получившееся значение присваевается элементу с id test в HTML документе
// document.getElementById("test").innerHTML = screenShow;

// Дополнительно выводим в консоль
console.log(screenShow);

