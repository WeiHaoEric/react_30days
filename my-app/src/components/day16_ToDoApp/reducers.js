export default function reducers(toDoList, action){
    switch(action.type){
        case "ADD":
            return toDoList.push(action.newEvent);

        default:
            return toDoList;
    }
}