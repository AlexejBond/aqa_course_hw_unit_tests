// 1. Создайте дженерик функцию wrapInArray, которая принимает значение 
// любого типа и возвращает его в виде массива этого типа.

function wrapInArray <T> (value: T): T[] {
  return [value];
}

const numberArray = wrapInArray(5);
console.log(numberArray);
console.log(wrapInArray('Hello'));
console.log(wrapInArray(true));

// 2.   Создайте дженерик функцию getLastElement, которая принимает массив 
// элементов типа T, и возвращает последний элемент (типа T).

function getLastElement <T> (array: T[]) {
  return array[array.length - 1];
}

console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement(['first', 'second', 'third', 'last']));
console.log(getLastElement([true, false, false, true]));

// 3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U.
// Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

interface IPair <T, U> {
  first: T;
  second: U;
}

function describePair <T, U> (pair: IPair <T, U>): string {
  return `${pair.first} and ${pair.second}`;
}
console.log(describePair({ first: 'Alice', second: 30 }));