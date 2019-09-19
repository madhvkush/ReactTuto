// data for Initial State
const initialStateData={
    AllData:{
        DataofComp1:'Welcome on React - Comp-1',
        DataofComp2:'Welcome on React - Comp-2'
    }
}

// Define the Case to Map dispatcher inside the MyReducer function
const MyReducer=(state=initialStateData,action)=>{
    switch(action.type)
    {
        case 'ChangeComp1Data':
             
            return{
                ...state,
                AllData:{DataofComp1:action.newData}
            };
        case 'ChangeComp2Data': 
            return{
                ...state,
                AllData:{DataofComp2:action.newData}
            };
         default :  return {...state};

    } 
};

export default MyReducer;