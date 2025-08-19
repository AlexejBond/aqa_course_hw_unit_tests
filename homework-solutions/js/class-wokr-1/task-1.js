
const numbers = [5, -2, 8, -7, 3, 0, 12, -4, 9, 6, -5, 11];

function splitPosNeg(arr) {
  const positives = arr.filter(num => num > 0);
  const negatives = arr.filter(num => num < 0);
  return [positives, negatives];
}

function sumPosNeg(arr) {
  const [positives, negatives] = splitPosNeg(arr);

  const sumPos = positives.reduce((sum, num) => sum + num, 0);
  const sumNeg = negatives.reduce((sum, num) => sum + num, 0);

  return [sumPos, sumNeg];
}

console.log(sumPosNeg(numbers)); 