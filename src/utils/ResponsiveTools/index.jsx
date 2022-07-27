import React from 'react';
import './style.scss'

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
