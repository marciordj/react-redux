import { createStore } from 'redux';

const store = createStore(() => {
  return {
    id: 322,
    hero: 'Spider-man',
    power: 'Vai teia'
  }
});

export default store;