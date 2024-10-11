// Promise란? : 비동기작업을 감싸는 객체
// API 호출, 서버간 통신에서 빈번하게 사용
// resolve: 콜백함수인 executer 내부에서 promise를 성공상태로 바꾸는 함수
// reject: 콜백함수인 executerpromise를 실패상태로 바꾸는함수
// const promise = new Promise((resolve, reject) => {
//   // executer
//   setTimeout(() => {
//     console.log("2초 경과");
//     resolve("성공");
//     // reject("왜 실패했는지 이유...");
//   }, 2000);
// });
// console.log(promise); // pending
// // 상태 바뀜확인
// setTimeout(() => {
//   console.log(promise); // 상태
// }, 3000);

// -------------------------------------------------------------------------
// function add10(num) {
//   const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//       if (typeof num === "number") {
//         resolve(num + 10);
//       } else {
//         reject("num이 숫자가 아닙니다");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// add10(0)
//   .then((result) => {
//     console.log(result);
//     return add10(result);
//   })
//   .then((result) => {
//     console.log(result);
//     return add10(undefined);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아님");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);

p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
  return newP; // then 안의 newP는 p.then메서드의 결과값 반환
  // return 안하면 원랜 원본 promise 객체 반환하나, 새로운 promise return하면 then 결과값이 새로운 promise
}); //그래서 여기에.then 이어붙어야함
