import "./App.css";
import { useRef, useState, useReducer } from "react";
import { Editor } from "./components/Editor";
import { Header } from "./components/Header";
import { List } from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "Spring 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "알고리즘 공부하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const currentId = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: currentId.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      Todoi List
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
