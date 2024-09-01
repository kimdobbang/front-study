// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  // a: obj1.a,
  // b: obj1.b,
  ...obj1,
  c: 3,
  d: 4,
};
// console.log(obj2);

// 함수 호출시 스프레드 연산자 활용
function funcA(p1, p2, p3) {
  // console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수 (배열 형태로 여러 매개변수를 한 번에 받음)
// -> Rest는 나머지 , 나머지 매개변수, rest매개변수는 맨 뒤에만 올 수 있다. 뒤에 다른 변수 추가 안됨

function funcB(one, two, ...ds) {
  // 뒤에 , four는 불가
  console.log(ds);
}

funcB(...arr1);
