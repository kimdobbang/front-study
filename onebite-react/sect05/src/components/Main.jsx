import "./Main.css";
// JSX 주의사항
// 1. 중괄호 내부에는 JS 표현식만 가능(값으로 평가되는 식 != 조건,반복문)
// 2. 숫자, 문자열, 배열 값만 정상 렌더링(객체 렌더링불가.오류는 안나도 렌더링안됨)
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다.

// 메인컴포넌트가 조건에 따라 다른 ui 랜더링
const Main = () => {
  // 현 접속 유저
  const user = {
    name: "김도이",
    isLogin: true,
  };

  return (
    <>
      {user.isLogin ? <div className="logout">Logout </div> : <div>로그인</div>}
    </>
  );
};

export default Main;
/*
  const number = 11;
  const obj = { a: 1 };
  <main>
    <h1>main</h1>
    <h2>{number + 10}</h2>
    <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    {10}
    {number}
    {true}
    {"true"}
    {undefined}
    {null}
    {[1, 2, 3]}
    {obj}
    {obj.a}
  </main>;
  */
