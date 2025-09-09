/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }
  const toLowerCaseWord = word.toLowerCase();
  const toSpliteWord = toLowerCaseWord.split('');
  const length = toSpliteWord.length;
  const backWord = [];
  for (let i = length; i > 0; i -= 1) {
    backWord.push(toSpliteWord[i - 1]);
  }
  const joinWord = backWord.join('');
  return joinWord === toLowerCaseWord;
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/


function findLongestWords(sentence) {
  let longestWords = [];
  if (typeof sentence !== 'string') {
    return longestWords;
  }
  if (sentence.trim() === '') {
    return longestWords;
  }
  const deleteSpace = sentence.replace(/\s+/g, ' ').trim();
  const arrayOfWords = deleteSpace.split(' ');
  const sortedArray = arrayOfWords.sort((a, b) => b.length - a.length);

  longestWords.push(sortedArray[0]);
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[0].length == sortedArray[i + 1].length) {
      longestWords.push(sortedArray[i + 1]);
    }
  }
  return longestWords;
}
let sentence = 'слова разделенные только с помощью пробелами';
findLongestWords(sentence);

// export { isPalindrom, findLongestWords };


