/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/



function mergeArrays(...arrays) {
  return arrays.reduce((acc, arr) => [...acc, ...arr], []);
}

console.log(mergeArrays([1,5,3], [3,11,4], [5,35,4,6]));


/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */


function devideBy(sentence) {
  if (typeof sentence !== 'string') {
    throw new TypeError('Error: Sentence must be a string !');
  }

  const words = sentence.trim().split(/\s+/);
  if (words.length === 0 || (words.length === 1 && words[0] === '')) return '';

  const transformed = words.map((w, i) => { 
    const lower = w.toLowerCase();
    if (i === 0) {
      return lower;
    }
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });

  return transformed.join('_');
}

console.log(devideBy('I   am   super  QA Engineer'));


/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('n must be a non-negative integer');
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Итеративно: O(n) по времени, O(1) по памяти
  let prev = 0; // F0
  let curr = 1; // F1
  for (let i = 2; i <= n; i++) {
    const next = prev + curr; // F(i) = F(i-1) + F(i-2)
    prev = curr;
    curr = next;
  }
  return curr;
}
console.log(fibonacci(8)); // 21


 export { mergeArrays, fibonacci, devideBy };

