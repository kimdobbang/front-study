// require로 module.exports로 내보낸 값 불러오기
// const moduleData = require("./math");
// const { add, sub } = require("./math");

// ESmodule(확장자까지 명시)
import { add, sub } from "./math.js";
// ES module에서 default는 중괄호 없이 다른 라인에 따로 import
// import multiply from "./math.js";
import mul from "./math.js"; // 이름바꿔 가져오기 가능
// import mul, { add, sub } from "./math.js"; // 동일 경로를 여러개 import는 한번에 가져오기 가능

// console.log(moduleData.add(1, 2));
console.log(add(1, 2));
// console.log(moduleData.sub(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
