// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4, five] = arr;
console.log(one, two, three, four, five); // 1 2 3 4 undefined

// 2. 객체의 구조 분해 할당 (객체의 프로퍼티를 키값 기준으로 변수에할당)
// 배열 구조분해할당과 차이: 객체를 뜻하는 중괄호 사용
// 함수에 여러 인자 전달시 사용
let person = {
  name: "김도이",
  age: 29,
  hobby: "테니스",
};

let { age: myAge, hobby, name, extra = "hello", extra2 } = person;
console.log(name, myAge, hobby, extra, extra2);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func2 = ({ name, age, hobby }) => {
  console.log(name, age, hobby, extra);
};
func2(person);

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
