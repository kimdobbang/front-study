// 1. 콜백함수
// 자신이 아닌 다르함수에, 인수로써 전달된 함수를 의미
function main(value) {
  // console.log(1);
  // console.log(2);
  value(); // 콜백함수는 main 함수에서 원하는 순서, 시점에 호출 가능
  // console.log("end");
}
function sub() {
  // console.log("I am sub");
}
main(sub); // main함수에 인수로전달된 콜백함수 sub

// main(sub)대신 선언문 자체를 안에 넣어서도
main(function sub() {
  // console.log("I am sub");
});

// 그리고 익명함수와 표현식 & 화살표 함수로 사용 가능
main(() => {
  // console.log("i am sub");
}); // 화살표함수가 main함수의 콜백함수로 전달됨

// // 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
    // console.log(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

// repeatDouble, Triple만드는 중복 코드를 피한다.
repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  // console.log(idx * 3);
});
