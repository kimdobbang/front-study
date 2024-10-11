// 5가지 배열 변형 메서드
// 배열 변형하여 새로운 배열로 반환,문자열로 묶어 반환 등..

// 1. filter
// 특정 조건으로 검색, 카테고리별 필터링에 필수
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// find, findIndex와 비슷한 문법: 배열 모든 요소 순회하며 콜백함수로 조건 체크
let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

// 화삺표 함수 조건문만 따로 떼어 조건식만 반환하도록 단축 가능
// const tennisPeople = arr1.filter((item) => {
//   if (item.hobby === "테니스") return true;
// });
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);

// 2. map
// 자주 활용됨.
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// map 메서드가 콜백함수 결과값들을 모아서 새로운 배열과 길이로 반환
// 원본 배열을 가공하여 새로운 배열 반환
// forEach와 비슷하나, 콜백함수 내에서 return으로 반환 값 반환 가능
let arr2 = [1, 2, 3];
// const mapResult1 = arr2.map((item, idx, arr) => item * 2);
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
// console.log(mapResult1); // 콜백함수가

// 실용적 사례: map 메서드로 arr1객체값들에서 name 프로퍼티의 값만 뽑아 배열로 추출
let names = arr1.map((item) => item.name); // item의 name만 반환
// console.log(names);

// 3. sort
// 원본배열을 사전순(오름차순)으로 정렬하는 메서드(숫자도 사전순으로함)
let arr3 = ["b", "a", "c"];
let arr4 = [10, 3, 5];
arr3.sort();
// console.log(arr3); // ['a', 'b', 'c']
// console.log(arr4); // [10, 3, 5] 숫자값으로 이뤄진 배열은 정렬 안됨

// 3-2. 숫자 값 대소비교 기준 정렬(오름차순)
// 숫자배열 대소비교 하려면 sort 호출하면서, 비교기준 설정하는 콜백함수 같이 넘김
// sort에서 양수 반환: 순서 바뀜(b, a)
// sort에서 음수 반환: 순서 안바뀜(a, b)
// 내림차순은 return 하는 값의 양, 음 바꾸면 됨
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // -> b, a 배치(양수반환=작은수를 앞에)
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1; // -> a, b 배치(음수반환=작은수를 앞에) -> 뭐가다름?
  } else {
    // 두 값 자리 바꾸지마라
    return 0; // a, b 자리 유지(0반환)
  }
});
// console.log(arr4); // [3, 5, 10]

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드(sort는 원본 배열정렬)
let arr6 = ["c", "a", "b"];
const sorted = arr6.toSorted();
// console.log(arr6); // ['c', 'a', 'b']
// console.log(sorted); // ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr7 = ["hi", "i'm", "kimdoi"];
const joined = arr7.join();
const joined2 = arr7.join(" "); // 구분자,를 바꿔주기
console.log(joined);
console.log(joined2);
