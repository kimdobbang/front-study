// 1. 함수 표현식(호이스팅이 안됨)
function funcA() {
  // console.log("funcA");
}

let varA = funcA; // 함수 자체를 담음
varA();

// 함수를 선언하지 않고 만들자마자 변수에 담듯 사용 가능
let varB = function () {
  // 변수의 값으로서 선언하는 함수는 어차피 이름 부르지 못하므로 익명함수로
  // console.log("funcB");
};

varB();

// 2-1. 화살표 함수_매개변수x (함수를 빠르고 간결하게 생성)
// function 지우기 ()와 {}사이에 =>
// return만 하는 함수면 {}와 return문 지워도 됨

// let varC = function () {
//   return1;
// };

// let varC = () => {
//   return 1;
// };
// let varC = () => 1;

// console.log(varC());

// 2-2. 화살표 함수_매개변수o
let varD = (value) => {
  console.log(value); // 내부 작업 있으면 {} 안에
  return value + 1;
};
console.log(varD(10));

// let varC = (value) => {
//   console.log(value);
//   return value + 1;
// };

// console.log(varC(10));
