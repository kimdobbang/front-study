// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // 30
num7 -= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
console.log((num8 += 1)); // 11
console.log(++num8); // 12 (전위연산)
console.log(num8++); // 12 (후위연산, 증감연산 위치 주의)
console.log(num8); // 13

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교연산자
// 동등비교연산자, 비동등비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 1 == "1";
let comp4 = 1 === "1";
// 대소비교 연산자
