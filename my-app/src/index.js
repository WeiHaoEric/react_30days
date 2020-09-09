import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./components/HelloWorld" //<-- 引入我們的HelloWorld component


// 新增以下兩個array
const ColorTable = ["gold", "yellowgreen", "purple"]
const TitleList = ["One", "Two", "Three"]; 

function moreHelloWorlds(num){
  let compList = [];  //<-- 宣告一個空的array list, 準備儲存重複的
  // for (let i=0; i<num; i++){
  //   compList.push(<HelloWorld msg={"Well Done~ Baby!!"} 
  //                             fontColor={"gold"}   //<--加入文字顏色 
  //                             bgColor={"black"}    //<--加入背景顏色 
  //                 />);
  // }

  // 改用map來寫一下
  compList = TitleList.map((title, id)=>{
    return(<HelloWorld 
              key={title+id}
              msg={title} 
              fontColor={ColorTable[id]}   //<--加入文字顏色 
              bgColor={"black"}    //<--加入背景顏色 
            />)
  })


  return compList; //<-- 回傳array list
}



ReactDOM.render(
  moreHelloWorlds(3), //<-- 接收到moreHelloWorlds(3)產生的3個components, 並render出去
  document.getElementById('root')
);
