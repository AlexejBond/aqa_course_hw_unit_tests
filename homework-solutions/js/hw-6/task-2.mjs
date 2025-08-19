/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique;
let resultNull;

const competitorSetLowCase = competitorPizzas.map(pizza => pizza.toLowerCase());

function checkPizzas(myPizzas) {
  const resultUnique = [];

  for (const pizza of myPizzas) {
    const lowerPizza = pizza.toLowerCase();

    if (!competitorSetLowCase.includes(lowerPizza)) {
      resultUnique.push(pizza);
    }
  }

  if (resultUnique.length === 0) {
    return null;
  }

  return resultUnique;
}

const resultT1 = checkPizzas(myPizzasT1); 
const resultT2 = checkPizzas(myPizzasT2); 

console.log('myPizzasT1:', resultT1); // ['Margherita', 'Vegetarian']
console.log('myPizzasT2:', resultT2); // null


// export { resultNull, resultUnique };
