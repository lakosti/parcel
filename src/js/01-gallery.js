// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// const sum = 10;
// console.log('const:', sum);

// import { sum as totalSum, multiply } from './02-video';
// console.log('resultFn:', totalSum(5, 3));
// console.log('resultFn:', multiply(5, 3));

//якщо більше ніж 5 імпортів з одного файлу то затягуємо весь файл
import * as data from './02-video';
console.log(data.sum(2, 3));

//дефолтний іморт
import value from './02-video';
console.log(value); // const a = 10
