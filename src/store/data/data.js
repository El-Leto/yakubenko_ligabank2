import { createReducer } from '@reduxjs/toolkit';
import { addHistory, addRates, clearHistory } from '../actions';

const MAX_HISTORY_LENGTH = 10;

const initialState  = {
  rates: {
    RUB: 74.27275,
    USD: 1,
    EUR: 0.850785,
    GBP: 0.729112,
    CNY: 6.4831,
  },
  history: [],
};

const data = createReducer(initialState, {
  [addHistory]: (state, { payload }) => {
    state.history.unshift(payload);

    if (state.history.length > MAX_HISTORY_LENGTH) {
      state.history.pop();
    }
  },
  [addRates]: (state, { payload }) => {
    state.rates = payload;
  },
  [clearHistory]: (state) => {
    state.history = [];
  },
});

export { data };
