// 조건문 없이도 특정 상황에서 어떤 함수를 호출하지 않도록 방지하거나, 어던 값을 굳이 계산 하지 않도록 제한
// falsy, truesy 활용시, 연산 값이 boolean이 아닌 ruesy, falsy 한 값 그 자체가 됨

// function returnFalse() {
//   console.log("False 함수");
//   // return false;
//   return undefined; // falsy도 가능
// }

// function returnTrue() {
//   console.log("True 함수");
//   // return true;
//   return 10; // truesy도 가능
// }

// console.log(returnFalse() && returnTrue());
// // console.log(returnTrue() && returnFalse());
// // console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례 (이전시간 조건문을 더 간결하게 개선 -> 조건문 지우고 console안에)

function printName(person) {
  const name = person && person.name;
  // console.log(person && person.name); // falsy
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
