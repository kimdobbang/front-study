// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// math 모듈 대표하는 기본값
export default function multiply(a, b) {
  return a * b;
}

// // module로부터 특정 값 내보내기 - CJS
// module.exports = {
//   add,
//   sub,
// };

// ESmodule (함수앞에 export 붙여도 됨)
// export { add, sub };
