import { useState } from "react";

export default function Board() {
  return (
  <>
    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div className="board-row">
      <Square/>
      <Square/>
      <Square/>
    </div>
  </>
  ); 
}
function Square() {
  const [value, setValue] = useState(null) // returns a object and a function to modify the object value
  function handleClick() {
    setValue("X") // every time this function is used, it will call the setValue function and update value const
  }
  return <button className="square" onClick={handleClick}>{value}</button> // when the button is clicked, the function handleClick() is called and react will re-render the elements
}