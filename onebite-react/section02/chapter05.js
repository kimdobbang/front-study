// 객체 타임 주의 사항
// 1. 의도치 않게 값이 수정될 수 있다.
// 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.(얕은비교)
// 3. 배열과 함수도 사실 객체이다. (즉, 추가적 프로퍼티나 메서드 가질 수 있다.)

let o1 = { name: "김도이" };
let o2 = o1;
let o3 = { ...o1 };

// 얕은 비교 (참조값 기준)
console.log(o1 === o2); // true
console.log(o2 === o3); // false

// 깊은비교
// JSON.stringify() 자바스크립트 내장 함수. 객체를 문자열로 변환 -> 참조값이 아닌 프로퍼티 비교
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // ture
