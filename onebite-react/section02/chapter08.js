// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// arr1.forEach(function () ss {});
// arr1 순히하며 반복마다 콜백함수 호출 & 3개 값 전달
// 현재 요소 값, 현재 반복 요소 idx , 전체 배열 전달

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf(단순한 원시타입 값 비교. 얕은비교, 동등비교, === 연산자 비교)
// 특정 요소와 정학히 일치하는 첫 번째 요소 인덱스(위치)를 찾아서 반환
// 객체는 참조를 기반으로 비교 가능하므로 동등비교로 객체의 위치 못찾음
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);

// indexOf vs findIndex
// let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
// console.log(
//   "참조 비교 결과" + objectArr.indexOf({ name: "이정환" }) // -1 (동일 값, 다른 객체)
// );
// console.log(
//   "값 비교 결과 :" + objectArr.findIndex((item) => item.name === "이정환")
// );

// 4. findIndex(복잡한 객체타입 값 찾기)
// 모든 요소를 순회하면서, 주어진조건을 만족하는 첫 번째 요소의 인덱스 반환 메서드
// 조건 체크를 위해 콜백 함수 사용. 객체의 참조가 아닌 값을 비교
// indexOf는 원하는 객체를 찾지 못할 수 있는 반면, findIndex는 값을 비교하여 올바른 인덱스를 찾을 수 있다.

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 첫번째로 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");

console.log(finded);
