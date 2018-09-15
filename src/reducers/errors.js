import { FETCH_ERROR } from '../constants/ActionTypes';

const initialState = {
  errors: [],
};

const insertItem = (array, item) => {
  const newArray = array.slice();
  newArray.push(item);
  return newArray;
};

const ErrorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ERROR:
      return {
        ...state,
        errors: insertItem(state.errors, action.error),
      };

    default:
      return state;
  }
};

export default ErrorsReducer;
