import { Update_Comp2 } from "./ActionTypes";

// Define the Case to Map dispatcher
const Comp2Reducer = (
  state = { DataOfComp2: "Initial Comp-2 Data" },
  action
) => {
  switch (action.type) {
    case Update_Comp2:
      return {
        ...state,
        DataOfComp2: action.newData,
      };

    default:
      return { ...state };
  }
};

export default Comp2Reducer;
