import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function LodoCounter() {
  const [listArry, setListArry] = useState([
    { task: "first sample", id: uuidv4(), mark: false },
  ]);
  const [newInput, setnewInput] = useState("");
  let addNew = () => {
    setListArry((preArray) => {
      return [...preArray, { task: newInput, id: uuidv4(), mark: false }];
    });
    setnewInput("");
  };
  let updateTask = (id) => {
    const items = listArry.filter((item) => item.id == id);
    items.map((item) => {
      setnewInput(item.task);
      delteTask(item.id);
    });
  };
  let delteTask = (id) => {
    setListArry(listArry.filter((item) => item.id != id));
  };
  let changeInput = (event) => {
    setnewInput(event.target.value);
  };
  let uperCaseAll = () => {
    setListArry((preArray) =>
      preArray.map((arry) => {
        return {
          ...arry,
          task: arry.task.toUpperCase(),
        };
      })
    );
  };
  let uperCaseSingle = (id) => {
    setListArry((preArray) =>
      preArray.map((arry) => {
        if (arry.id == id) {
          return {
            ...arry,
            task: arry.task.toUpperCase(),
          };
        } else {
          return arry;
        }
      })
    );
  };
  let markAsDone = (id) => {
    setListArry((preArray) =>
      preArray.map((arry) => {
        if (arry.id == id) {
          return {
            ...arry,
            mark: !arry.mark,
          };
        } else {
          return arry;
        }
      })
    );
  };
  let markAsDoneall = (id) => {
    setListArry((preArray) =>
      preArray.map((arry) => {
          return {
            ...arry,
            mark: !arry.mark,
          };
      })
    );
  };
  return (
    <>
      <h2>Todo list</h2>
      <span>
        <input type="text" value={newInput} onChange={changeInput} />
        <br />
        <button onClick={addNew}>Add New</button>
      </span>
      <span>
        <h3>Print List</h3>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ paddingLeft: "100px" }}>task</span>
          <span>Id</span>
          <span> action &nbsp; &nbsp; &nbsp;</span>
        </div>
        <hr />
        <ul>
          {listArry.map((item) => {
            return (
              <li
                key={item.id}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <span
                  style={{
                    textDecoration: item.mark ? "line-through" : "none",
                  }}
                >
                  {item.task}
                </span>
                <span>{item.id}</span>
                &nbsp; &nbsp; &nbsp;
                <span>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => delteTask(item.id)}
                  ></i>
                  &nbsp; &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => updateTask(item.id)}
                  ></i>
                  &nbsp; &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-u"
                    onClick={() => uperCaseSingle(item.id)}
                  ></i>
                  &nbsp; &nbsp; &nbsp;
                  <i
                    className="fa-solid fa-thumbtack-slash"
                    onClick={() => markAsDone(item.id)}
                  ></i>
                </span>
              </li>
            );
          })}
        </ul>
        <hr />
        <button onClick={uperCaseAll}>UperCaseAll</button>
        <button onClick={markAsDoneall}>markAsDoneall  </button>
      </span>
    </>
  );
}
