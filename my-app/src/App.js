import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // === 新增的程式碼 ===
  let element = <h1 style={{color:"gold"}}>{"You did a good job!!"}</h1>; //<-- 宣告一個變數，並賦予他html的標籤元素
  console.log("show element detail:", element) //<-- 印出來看看，你會發現html的資訊被轉譯為 javascript 的object
  // ==================

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* {<h1 style={{color:"gold"}}>{"You did a good job!!"}</h1>} */}
        
        {/*  === 新增的程式碼 === */}
        {/* 底下用大括弧把上面宣告的element包起來 */}
        {element}      
        {/* ================== */}
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
