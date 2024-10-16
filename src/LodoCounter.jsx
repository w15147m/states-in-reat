import { useState } from "react";
export default function LodoCounter() {

  let d_flex = [{ display: "flex" }];
  const [moves, setMoves] = useState({red : 0, green : 0, yellow : 0, blue : 0,});
  const updateMovesRed = () => {
    setMoves((preMove)=>{
      return ({...preMove, red: preMove.red + 1});
    });
  } 
  const updateMovesGreen = () => {
   setMoves((preMove)=>{
    return ({...preMove, green: preMove.green + 1});
   });
   
  } 
  const updateMovesYellow = () => {
   setMoves((preMove)=>{
    return ({...preMove, yellow: preMove.yellow + 1});
   });

   
  } 
  const updateMovesBlue = () => {
   setMoves((preMove)=>{
    return ({...preMove, blue: preMove.blue + 1});
   });
  } 
  return (
    <>
      <h2>lodo</h2>
      <div style={{ d_flex }}>
        <span>
          <p>red moves: {moves.red}</p>
          <button style={{ background: "red" }} onClick={updateMovesRed}>{moves.red}</button>
        </span>
        <span>
          <p>green moves: {moves.green}</p>
          <button style={{ background: "green" }} onClick={updateMovesGreen}>{moves.green}</button>
        </span>
        <span>
          <p>yellow moves: {moves.yellow}</p>
          <button style={{ background: "yellow" , color: 'black' }} onClick={updateMovesYellow}>{moves.yellow}</button>
        </span>
        <span>
          <p>blue moves: {moves.blue}</p>
          <button style={{ background: "blue" }} onClick={updateMovesBlue}>{moves.blue}</button>
        </span>
      </div>
    </>
  );
}
