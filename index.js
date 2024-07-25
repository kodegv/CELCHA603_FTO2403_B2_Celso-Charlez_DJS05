// index.js

import { store, ADD, SUBTRACT, RESET } from './store';

// Scenario 1: Initial State Verification
console.log('Initial state:', store.getState()); // Should log: { count: 0 }

// Add event listeners to buttons
document.getElementById('addBtn').addEventListener('click', () => {
  store.dispatch({ type: ADD });
});

document.getElementById('subtractBtn').addEventListener('click', () => {
  store.dispatch({ type: SUBTRACT });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  store.dispatch({ type: RESET });
});

// Scenario 2: Incrementing the Counter
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
console.log('State after two ADD actions:', store.getState()); // Should log: { count: 2 }

// Scenario 3: Decrementing the Counter
store.dispatch({ type: SUBTRACT });
console.log('State after one SUBTRACT action:', store.getState()); // Should log: { count: 1 }

// Scenario 4: Resetting the Counter
store.dispatch({ type: RESET });
console.log('State after RESET action:', store.getState()); // Should log: { count: 0 }
