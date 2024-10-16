import "./App.css";
import { useState } from "react";
import LikeBtn from "./LikeBtn";
import CounterApp from "./CounterApp";
import LodoCounter from "./lodoCounter";
import ArryStatee from "./ArryStatee";
import TodoList from "./TodoList";

function App() {
  const [openThis, setOpenThis] = useState("LikeBtn");

  function openNew(data) {
    setOpenThis(data);
  }

  return (
    <>
      <span>
        <button onClick={() => openNew("LikeBtn")}>LikeBtn</button>
        <button onClick={() => openNew("Count")}>Counter</button>
        <button onClick={() => openNew("ObjectsCount")}>Objects  Count</button>
        <button onClick={() => openNew("ArryStatee")}>Array State</button>
        <button onClick={() => openNew("TodoList")}>TodoList</button>
      </span>
      
      {openThis === "LikeBtn" && <LikeBtn />}
      {openThis === "Count" && <CounterApp />}
      {openThis === "ObjectsCount" && <LodoCounter />}
      {openThis === "ArryStatee" && <ArryStatee />}
      {openThis === "TodoList" && <TodoList />}
    </>
  );
}

export default App;
