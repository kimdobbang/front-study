for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 조건식 참일 때 건너 뛰기
  }
  console.log(idx);

  if (idx >= 5) {
    break; // 강제종료
  }
}
