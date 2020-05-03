import { Comp2ActionTypes } from "./ActionTypes";

// Define the Case to Map dispatcher
const Comp2Reducer = (
  state = { DataOfComp2: "Initial Comp-2 Data", isUpdating: false },
  action
) => {
  switch (action.type) {
    case Comp2ActionTypes.Update_Comp2:
      return {
        ...state,
        DataOfComp2: action.newData,
      };
    case Comp2ActionTypes.StartUpdate:
      return {
        ...state,
        isUpdating: true,
      };
    case Comp2ActionTypes.FinishUpdate:
      return {
        ...state,
        isUpdating: false,
      };

    default:
      return { ...state };
  }
};

export default Comp2Reducer;
