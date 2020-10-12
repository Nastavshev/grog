// Добавь сюда код

import ADD_INPUT from './actionTypes';

const reduser = (state, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return {
        ...state,
        names: [...state.names, action.payLoad],
      };
    default:
      return state;
  }
};

export default reduser;
