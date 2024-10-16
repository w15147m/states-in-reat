import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function LodoCounter() {
  const [listArry, setListArry] = useState([
    { task: "first sample", id: uuidv4() },
  ]);
  const [newInput, setnewInput] = useState("");
  let setArryToList = () => {
    setListArry([...listArry, { task: newInput, id: uuidv4() }]);
    setnewInput("");
  };
  let delteTask = (id) => {
    setListArry(listArry.filter((item)=> item.id != id ))
    
  }
  let changeInput = (event) => {
    setnewInput(event.target.value);
  };
  return (
    <>
      <h2>Todo list</h2>
      <span>
        <input type="text" value={newInput} onChange={changeInput} />
        <br />
        <button onClick={setArryToList}>Add New</button>
      </span>
      <span>
        <h3>Print List</h3>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ paddingLeft: "100px" }}>task</span>
          <span>Id</span> 
          <span> action</span>
        </div>
        <hr />
        <ul>
          {listArry.map((item) => {
            return (
              <li
                key={item.id}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <span>{item.task}</span>
                <span>{item.id}</span>
                &nbsp; &nbsp; &nbsp;
                <i className="fa-solid fa-trash" onClick={()=> delteTask(item.id)}></i>
              </li>
            );
          })}
        </ul>
      </span>
    </>
  );
}
