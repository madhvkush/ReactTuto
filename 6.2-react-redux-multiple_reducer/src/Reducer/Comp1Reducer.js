import { Update_Comp1 } from "./ActionTypes";

// Define the Case to Map dispatcher
const Comp1Reducer = (
  state = { DataOfComp1: "Initial Comp-1 Data" },
  action
) => {
  switch (action.type) {
    case Update_Comp1:
      return {
        ...state,
        DataOfComp1: action.newData,
      };

    default:
      return { ...state };
  }
};

export default Comp1Reducer;
