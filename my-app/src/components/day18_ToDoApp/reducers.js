export default function reducers(toDoList, action) {
  let newToDoList = [...toDoList];
  switch (action.type) {
    case "ADD":
      newToDoList.push(action.newEvent); 
      break;
    
    // 新增Delete的部分
    case "DEL":
      newToDoList = newToDoList.filter(msg=>msg!==action.delMsg)  // 利用filter，移除toDoList之中的delMsg
      console.log("Remove: "+action.delMsg);
      break;

    default:
      console.log("toDoList", toDoList);
      break;
  }

  localStorage.setItem('toDoList', newToDoList) //<-- 讓browser能夠暫存這筆資料，重新整理就不用擔心資料遺失囉
  return newToDoList;
}
