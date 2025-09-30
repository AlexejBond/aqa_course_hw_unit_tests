/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (Object.keys(character).length <= 1) {
    throw new Error("give me a correct arguments");
  } else {
    characters.push({
    name: character.name,
    age: character.age
  })
  }
}

function getCharacter(name) {
  if (name.length === 0) {
    throw new Error("give me a coorect arguments");
  } else {
      return characters.find((elem) => {
    return elem.name === name
  })
  }
}

function getCharactersByAge(minAge) {
  if (typeof minAge != 'number') {
    throw new Error("give me a correct arguments");
  } else {
       return characters.filter((elem) => {
    return elem.age >= minAge
  })
}}

function updateCharacter(name, newCharacter) {
    if (Object.keys(newCharacter).length <= 1) {
    throw new Error("give me a correct arguments");
  } else {
      
  let obj = getCharacter(name)
  obj.name = newCharacter.name;
  obj.age = newCharacter.age;
  return characters; 
  }
}

//Напишите функцию для удаления персонажа removeCharacter(name) 
// (Реализовать через splice, индекс персонажа искать методом findInxex)

function removeCharacter(name) {

  let ind = characters.findIndex(elem => elem.name === name);

  if (ind === -1) {
    throw new Error("give me a correct arguments");
  } else {
  characters.splice(ind, 1)
 }
  return characters
}

 export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };