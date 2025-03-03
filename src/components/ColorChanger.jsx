import { useState } from "react";

function ColorChanger () {

  const [color, setColor] = useState("#000");
  const changeColor = () => {
    setColor(getRandomColor());
  }
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };
  
  // This function is for generating random colors in hexadecimal
  // const getRandomColor = () => {
  //   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // };  

  return <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
    <h1 className="mb-4 text-primary fw-bold">Generate Random Colors</h1>

    <div style={{ backgroundColor: color }} className={`card shadow-lg px-4 py-5 text-center w-50 h-50 d-flex flex-column justify-content-between`}>
      <h2 className={`display-4 fw-bold`}>{ color }</h2>
      <button className="btn btn-dark" onClick={changeColor}>Click to change color</button>
    </div>

  </div>
}

export default ColorChanger;