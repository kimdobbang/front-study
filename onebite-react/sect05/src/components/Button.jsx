const Button = ({ text, color, children }) => {
  // 이벤트 객체(e): 이것을 통해 크로스브라우징 문제 해결
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
