import { useState } from "react";
export default function LodoCounter() {
  let d_flex = [{ display: "flex" }];
 
  const [moves, setMoves] = useState(['move 1']);
  const updateMovesRed = () => {
    setMoves((preMove) => {
      return([...preMove, `, move ${preMove.length+1}`]);
    });
  };
  return (
    <>
      <h2>lodo</h2>
      <div style={{ d_flex }}>
        <span>
          <p>{moves}</p>
          <button style={{ background: "#646cff" }} onClick={updateMovesRed}>
           push move 
          </button>  
        </span>
      </div>
    </>
  );
}
