// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // new와 함께 새로운 객체 생성하는 메서드 = 생성자  // Date()는 현재시간
let date2 = new Date(1997, 0, 7, 23, 59, 59); // Jan
let date4 = new Date(1997, 14, 7, 23, 59, 59); //Mar
// let date5 = new Date("1995-07-05"); // . 또는 / 또는 ". " 모두 가능
let date5 = new Date("1995/07/05/04:53:10");
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초" (=UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 복잡한 시간 정보를 숫자로 관리하여 편리해서 자주 사용
let ts1 = date1.getTime(); // getTime(): date 객체안에저장된 시간에 해당하는 타임스탬프 계산
let date7 = new Date(ts1); // 새로운 Date 객체 생성에 이용
// console.log(ts1); // 1726318574907
// console.log("date: " + date1 + "\n" + "ts:" + date7);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 년
let month = date1.getMonth() + 1; // 1월:0 / 2월:1 / 3월:2
let date = date1.getDate(); // 일

let hour = date1.getHours(); // 시
let minute = date1.getMinutes(); // 분
let seconds = date1.getSeconds(); // 초

// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// console.log("수정시간: ", date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시분초 제외
console.log(date1.toLocaleString()); // 현지화 포맷
