// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}
delayTwoSeconds(() => console.log('Task 1/1: I am executed with 2 seconds dalay'));

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const promiseResolved = new Promise((resolve, reject) => {
  resolve(1);
});

promiseResolved.then((resolvedPromise) => console.log(`Task 1/2: ${resolvedPromise}`));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const promiseRejected = new Promise((resolve, reject) => {
  reject('Promise failed');
});

promiseRejected.catch((rejectedPromise) => console.log(`Task 1/3: ${rejectedPromise}`));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
  const promise = new Promise((resolve) => {
    resolve(number);
  });
  return promise;
}

console.log(promiseNumber(333));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

let arrayOfPromises = [promiseNumber(1), promiseNumber(2), promiseNumber(3)];

Promise.all(arrayOfPromises).then((result) => {
  result.map((resultOfEachPromiseInArray) => console.log('Task 1/5:',resultOfEachPromiseInArray));
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled(arrayOfPromises).then((results) => results.forEach((result) => console.log(result)));

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function promiseAll(incomingArrayOfPromises) {
  try {
    await Promise.all(incomingArrayOfPromises).then((result) => {
      result.map((resultOfEachPromiseInArray) => console.log(resultOfEachPromiseInArray));
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
promiseAll(arrayOfPromises);

async function promiseAllSettled(incomingArrayOfPromises) {
  try {
    await Promise.allSettled(incomingArrayOfPromises).then((results) =>
      results.forEach(({ status, value, reason }) =>
        console.log(`- Fulfilled with the status:'${status}' with value '${value}'`),
      ),
    );
  } catch ({ status, value, reason }) {
    console.error(`Rejected with the status: ${status} and reason ${reason}`);
  }

}
promiseAllSettled(arrayOfPromises);