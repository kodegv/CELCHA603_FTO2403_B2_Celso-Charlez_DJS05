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

  // Create the store
function createStore(reducer) {
    let state;
    let listeners = [];
  
    // Get the current state
    function getState() {
      return state;
    }

    // Dispatch an action
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  // Subscribe to state changes
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }