import React from 'react';
import './style.scss'

/**
 * Convert the value of the input field to a number, and display
 * the result in the result div.
 */
const convertThis = (el) => {
  const result = document.querySelector(".result");

  let a = el.target.value * 0.29;
  result.innerHTML = (el.target.value - a).toFixed(2)
  
}

const RespTool = () => {
  return (
    <div className='respTool'>
      <input className='toolsInput' type="text" placeholder='Entrer votre valeur' onInput={convertThis.bind(this)}/>
      <p className='result'></p>
    </div>
  );
}

export default RespTool;
