// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number (수치연산 실패 결과값)

// 2. STRING Type
let myName = "김도이";
let myLocation = "봉명동";
let introduce = myName + myLocation;

// 템플릿 리터럴 문법
let introduceText = `백틱으로 만들면 이렇게 쓸 수 있다. ${myName}는 ${myLocation}에 거주합니다.`;

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다는 표현)
let empty = null;

// 5. Undefined Type (변수 선언 후 어떤 값도 초기화 하지 않았거나, 존재하지 않는 값 불러올 때)
let none;
// Undefined는 변수 선언후 초기화x시 자동으로 들어가는 값, null은 명시적으로 할당해야 함.
