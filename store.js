// store.js

// Define the initial state
const initialState = { count: 0 };

// Define action types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Define the reducer function
function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD:
        return { count: state.count + 1 };
      case SUBTRACT:
        return { count: state.count - 1 };
      case RESET:
        return { count: 0 };
      default:
        return state;
    }
  }