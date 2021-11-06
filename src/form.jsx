import React, { useState } from 'react';
import './form.css';
import logo from './logo.png';
import Search from './search.png';
import Mic from './mic.png';

function Input(){

  const [state, setState] = useState(logo);

  const showText = (props) => {
    console.log(props);
    setState(props.target.value);
  }

  return (
    <div className="form">
      <div className="logoContainer">
        <p>
          {state ? state : <img src={logo}/>}
        </p>
      </div>
      <div className="inputContainer">
        <img src={Search} alt="" />
        <input type="text" onChange={showText} className="searchBtn micBtn" /> 
        <img src={Mic} alt="" />
      </div>
      <div className="btn">
          <button>Google Search</button>
          <button> Im Feeling Lucky </button>
      </div>
          
      <div className="lang"> 
        Google offered in:
        <a href="#">Hausa</a>
        <a href="#">Igbo</a>
        <a href="#">Èdè</a>
        <a href="#">Yorùbá</a>
        <a href="#">Pidgin</a>
      </div>
    </div>
  );
}

export default Input;