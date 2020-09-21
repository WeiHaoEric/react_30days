export default function reducers(toDoList, action) {
  const newToDoList = [...toDoList];
  switch (action.type) {
    case "ADD":
      newToDoList.push(action.newEvent); //<-- 先push
      break;
    default:
      console.log("toDoList", toDoList);  //<--直接印出舊的
      break;
  }

  return newToDoList;  //<--不管動作如何，直接回傳複製過來的newToDoList
}
