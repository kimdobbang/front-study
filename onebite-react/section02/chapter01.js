// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN; // Not a Number
let f6 = "";
let f7 = 0n; // BigInteger

if (!f1) {
  // f1이 fale라서 !f1가 true로 평가되면 falsy 출력
  //   console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값(모두 나열 불가)
let t1 = "hello";
let t2 = 123;
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {}; // 화살표 함수

if (!f1) {
  // f1가 true로 평가되면 Truthy 출력
  //   console.log("Truthy");
}

// 3. 활용 사례:객체 프로퍼티 접근 함수 여러개 만들 때
// 서비스 개발시 객체의 프로퍼티 접근시 조건문으로 반드시 먼저 확인
function printName(person) {
  //   if (person === undefined || person = null {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
// let person = null;
// let person;
printName(person);
