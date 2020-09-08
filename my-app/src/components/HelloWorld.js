import React from 'react'  //<-- 引入React

function HelloWorld(props) {
    let styledSet = {color: props.fontColor,           //<--用一個變數接收傳遞過來的color
                     backgroundColor: props.bgColor};  //   並放到下方的<h1 style={這裏}>
    return (
        <div>
        {<h1 style={styledSet}>{"Received message:"+props.msg}</h1>}
        </div>
    )
}

export default HelloWorld //<-- 輸出讓其他的js檔案使用