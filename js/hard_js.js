
let lang = 'ru';
if (lang == 'en') {
  langArr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
if (lang == 'ru') {
  langArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
console.log('if: ', langArr);

switch(lang){
  case 'ru':
    langArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    break;
  case 'en':
    langArr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    break;
}
console.log('switch: ', langArr);

let langMatrix = {
  'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
  'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
};
console.log('Matrix: ', langMatrix[lang]);

let namePerson = 'Артем';
let post = namePerson == 'Артем' ? 'Директор' : 
            namePerson == 'Максим' ? 'Преподаватель' : 
              namePerson == true ? 'Студент' : 'Студент';
console.log('post: ', post);