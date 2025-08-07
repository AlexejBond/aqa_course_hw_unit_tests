/*
Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/


const n = 4;

const strN = String(n);
const nn = Number(strN + strN);
const nnn = Number(strN + strN + strN);

const sumN = n + nn + nnn;

console.log("n = 4, Сумма n + nn + nnn == ", sumN);