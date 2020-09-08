import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./components/HelloWorld" //<-- 引入我們的HelloWorld component

ReactDOM.render(
    <HelloWorld msg={"Well Done~ Baby!!"} 
                fontColor={"gold"}   //<--加入文字顏色 
                bgColor={"black"}    //<--加入背景顏色 
                />,   //<-- 使用它就像用一個<>標籤符號，裡頭放入HelloWorld, 並在尾端給他一個 /，做為結尾
  document.getElementById('root')
);
