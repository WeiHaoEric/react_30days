// 建立reducer func
export default function myReducer(state, action) {
  switch (action.type) {
    case "A":
      return "Hello A";
    case "B":
      return "Hello B";
    case "C":
      return "Hello C";
    default:
      return state;
  }
}