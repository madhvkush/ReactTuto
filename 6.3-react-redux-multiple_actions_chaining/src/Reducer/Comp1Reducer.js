import { Comp1ActionTypes } from "./ActionTypes";

// Define the Case to Map dispatcher
const Comp1Reducer = (
  state = { DataOfComp1: "Initial Comp-1 Data", isUpdating: false },
  action
) => {
  switch (action.type) {
    case Comp1ActionTypes.Update_Comp1:
      return {
        ...state,
        DataOfComp1: action.newData,
      };
    case Comp1ActionTypes.StartUpdate:
      return {
        ...state,
        isUpdating: true,
      };
    case Comp1ActionTypes.FinishUpdate:
      return {
        ...state,
        isUpdating: false,
      };

    default:
      return { ...state };
  }
};

export default Comp1Reducer;
