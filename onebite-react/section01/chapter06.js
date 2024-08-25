// 1. 묵시적 형 변환
// -> JS엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = Number(str2); // NaN
let strToNum3 = parseInt(str2); //10 (다만 숫자가 앞에있어야함)

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
