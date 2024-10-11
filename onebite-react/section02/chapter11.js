// '동기': Thread에서 여러 작업을 순서대로, 하나씩 처리하는 방식
// JS는 동기적으로 실행. 멀티스레드로 동기방식을 보완하는 java, C#과 달리 JS엔진은 싱글쓰레드
console.log("-------동기-------");
console.log("1"); // first
console.log("2"); // second
console.log("3"); //third

console.log("-------동기-------");
function taskB() {
  console.log("B - 10초 걸리는 함수면?");
}
console.log("A - 1초");
taskB();
console.log("C - 2초 -> total 13초");

// '비동기': 동기적이지X, 작업을 순서대로 처리X
// 비동기 작업들은 JS엔진의 쓰레드가 실행하는게 아님
// Web APIs(브라우저가 직접 관리하는 별도영역)에서 실행됨 - JS엔진이 비동기함수와 콜백함수를 webAPIs에 넘김 -> 다시 JS엔진에 콜백함수 넘겨서 JS엔진이호출
// 각 비동기 작업들 종료 후, 각 작업의 결과값이용해 또다른 동작시 -> 각 작업에 callback 함수 붙여 사용 가능

console.log("------비동기--------");
// setTimeout: 원하는 코드(or콜백함수)를 특정시간 이후 콜백함수 호출하여 비동기적 실행
// setTimeout(콜백함수, 밀리세컨즈)   setTimeout(()=>{}, 3000)

console.log(1); // first
setTimeout(() => {
  console.log(2); // last(3초후)
}, 3000);
setTimeout(() => {
  console.log("1초 뒤 2나올거지렁"); // third(2초후)
}, 2000);
console.log(3); // second

// 1
// 3
// 1초 뒤 2나올거지렁
// 2
