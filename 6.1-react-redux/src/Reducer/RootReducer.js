import { Update_Comp1, Update_Comp2 } from "./ActionTypes";
// data for Initial State  (Initial RootStore)
const initialStateData = {
  DataOfComp1: "Initial Comp-1 Data",
  DataOfComp2: "Initial Comp-2 Data",
};

// Define the Case to Map dispatcher inside the MyReducer function
const RootReducer = (state = initialStateData, action) => {
  switch (action.type) {
    case Update_Comp1:
      return {
        ...state,
        DataOfComp1: action.newData,
      };
    case Update_Comp2:
      return {
        ...state,
        DataOfComp2: action.newData,
      };
    default:
      return { ...state };
  }
};

export default RootReducer;
