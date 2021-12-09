import { createReducer } from '@reduxjs/toolkit';
import { setSelectedOption, updatePrice, setDeposite } from '../action';

const SelectOption = {
  INIT: 'init',
  HOUSE: 'house',
  CAR: 'car',
};

const Credit = {
  init: {
    TYPE: 'Выберите цель кредита',
  },
  house: {
    TYPE: 'Ипотечное кредитование',
    PRICE_NAME: 'Стоимость недвижимости',
    MIN: 1200000,
    MAX: 25000000,
    DEPOSITE_MIN_PERCENT: 10,
  },
  car: {
    TYPE: 'Автомобильное кредитование',
    PRICE_NAME: 'Стоимость автомобиля',
    MIN: 500000,
    MAX: 5000000,
    DEPOSITE_MIN_PERCENT: 20,
  },
};

const initialState  = {
  selectedOption: SelectOption.INIT,
  price: '',
  deposite: '',
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedOption, (state, action) => {
    state.selectedOption = action.payload;
    state.price = Credit[action.payload].MIN;
  });
  builder.addCase(updatePrice, (state, action) => {
    state.price = action.payload;
  });
  builder.addCase(setDeposite, (state, action) => {
    state.deposite = action.payload;
  });
});

export { data, SelectOption, Credit };
