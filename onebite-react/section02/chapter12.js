// 학습내용1: 비동기작업의 결과를 콜백함수로 처리
// 학습내용2: 비동기작업 결과를 또다른 비동기작업 인수로 활용
// 학습내용2가 깊어지며 콜백 지옥 피하기 위해 promise(비동기작업 돕는 객체) 공부할것

// 비동기작업하는 함수 결과값을 함수 외부에서 쓰려면, 비동기작업 함수의 매개변수로 콜백함수 받기
// 비동기작업함수 내부에서 콜백함수에 결과값을 매개변수로 전달하며 호출하도록 설정
// add호출 -> add에서 callback호출 -> callback에서 비동기처리결과를 value로 받아 출력
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}
add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food); // 떡볶이(3")

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); // 식은 떡볶이(5")

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood); // 냉동된 식은 떡볶이(6.5")
    });
  });
});
