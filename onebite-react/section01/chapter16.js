// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수객체: 새로운 값을 할당하지 못하는 변수. 값 조작은 가능
// 상수인 animal에 디른 객체 생성하여 할당 불가. 프로퍼티 cUD 가능
// animal = { a: 1 }; // TypeError: Assignment to constant variable.
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 객체 프로퍼티 중 값이 함수인 프로퍼티를 말함(동작 정의)
// 함수가 아닌 프로퍼티는 객체의 정보를 갖고있음
const person = {
  name: "이정환",
  // 메서드 선언
  // sayHi: function () {
  //   console.log("안녕");
  // },
  // sayHi: () => {
  //   console.log("안녕!");
  // },
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi(); // 점표기법을 통한 호출
person["sayHi"](); // 괄호 표기법을 통한 호출
