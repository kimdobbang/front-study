import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button";
// 컴포넌트: html 태그 반환 함수: (아래는 App컴포넌트)
// App: 모든 컴포넌트의 조상 = root
function App() {
  const buttonProps = {
    text: "weapon",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    // App(=root) 컴포넌트의 자식 컴포넌트들
    <>
      <Header />
      <Main />
      <Button {...buttonProps} />
      <Button text={"active"} />
      <Button text={"passive"}>
        <div>자식요소</div>
        <Footer />
      </Button>
      <Footer />
    </>
  );
}

export default App;
