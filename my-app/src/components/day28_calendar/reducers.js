// reducers
export default function reducers(mmt, action){
    let type = action.type; 
  
    switch(type){
      case "LAST_MONTH":
        mmt.subtract(1, "month");
        break;
  
      default: 
      case "NEXT_MONTH":
        mmt.add(1, "month");
        break;
    }
  
    console.log(mmt.format("YYYY-MM-DD"));
    return mmt;
  }