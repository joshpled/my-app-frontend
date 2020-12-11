import { combineReducers } from "redux"; 

const rootReducer = combineReducers({
  pet: petReducer
});

export default rootReducer; 

function petReducer(state = { pet: {}, loading: false }, action){
  switch (action.type) {
    case "CREATING_PET":
      return {
        ...state, 
        pet: state.pet,
        loading: true
      }
    case "CREATE_PET":
      return {
        ...state,
        pet: action.payload,
        loading: false
      };

    default:
      return state;
  }

};
