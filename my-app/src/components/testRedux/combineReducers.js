import React from "react";

export default function combineReducers( {allReducers, allStates} ) {
    return (state={}, action)=>{       //<-- 注意！這裡才是主要回傳的地方，別被迷惑囉！我回傳的是一個 reducer 樣子的func，內部開始組裝reducers及states
        return Object.keys(allReducers).reduce((accumStates, key)=>{
            const aReducer = allReducers[key];

            //[說明以下程式碼]
            //下方的程式其實是直接呼叫func, 而非使用dispatch，儘管他們呼叫的都是reducer func，但還是不同
            //action如果有被抓到，就會回傳對應的，如果沒有，就回傳default，
            //所以每次呼叫這玩意，會回傳 n＋１個狀態;包含一個有命中，n個沒命中的初始狀態
            accumStates[key] = aReducer(allStates[key], action); 

            return accumStates;
        },
        {}) //<-- 空的{}是 Array.reduce() func的第二個參數
    }
}
