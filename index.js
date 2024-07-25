// index.js

//import { store, ADD, SUBTRACT, RESET } from './store';
// Change to export store and actions from store.js to ensure CommonJs syntax

// Update the counter display
function updateCounter() {
    const countElement = document.getElementById('count');
    countElement.textContent = store.getState().count;
  }

// Subscribe to store updates
store.subscribe(updateCounter);

// Scenario 1: Initial State Verification
console.log('Initial state:', window.store.getState()); // Should log: { count: 0 }

// Add event listeners to buttons
document.getElementById('addBtn').addEventListener('click', () => {
  window.store.dispatch({ type: window.ADD });
});

document.getElementById('subtractBtn').addEventListener('click', () => {
  window.store.dispatch({ type: window.SUBTRACT });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  window.store.dispatch({ type: window.RESET });
});

// Scenario 2: Incrementing the Counter
window.store.dispatch({ type: window.ADD });
window.store.dispatch({ type: window.ADD });
console.log('State after two ADD actions:', window.store.getState()); // Should log: { count: 2 }

// Scenario 3: Decrementing the Counter
window.store.dispatch({ type: window.SUBTRACT });
console.log('State after one SUBTRACT action:', window.store.getState()); // Should log: { count: 1 }

// Scenario 4: Resetting the Counter
window.store.dispatch({ type: window.RESET });
console.log('State after RESET action:', window.store.getState()); // Should log: { count: 0 }
