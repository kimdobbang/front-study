import "./Editor.css";
import { useRef, useState } from "react";

export const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const currentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      currentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <main className="Editor">
      <input
        ref={currentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="공부해라 김도이.."
      />
      <button onClick={onSubmit}>추가</button>
    </main>
  );
};
