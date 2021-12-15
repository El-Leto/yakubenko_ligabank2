import { createReducer } from '@reduxjs/toolkit';
import { Credit, SelectOption } from '../../const';
import {
  setSelectedOption,
  updatePrice,
  setDeposite,
  setDepositePercent,
  setPeriod,
  setMomCapital,
  setCasco,
  setInsurance,
  setIsRequestOpen,
  setNumberRequest,
  setForm,
  setUser,
  setIsIncorrectPrice,
  setIsModalOpen,
  setIsLoginOpen,
  setIsFormValidate,
  setIsVisiblePassword
} from '../action';

const initialState  = {
  selectedOption: SelectOption.INIT,
  price: '',
  deposite: '',
  depositePercent: '',
  period: '',
  momCapital: false,
  casco: false,
  insurance: false,
  isRequestOpen: false,
  numberRequest : 0,
  form: {
    name: '',
    phone: '',
    email: '',
  },
  user: {
    login: '',
    password: '',
  },
  isIncorrectPrice: false,
  isModalOpen: false,
  isLoginOpen: false,
  formValidate: false,
  isVisible: false,
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedOption, (state, action) => {
    state.selectedOption = action.payload;
    state.price = Credit[action.payload].MIN;
    state.period = Credit[action.payload].PERIOD_MIN;
  });
  builder.addCase(updatePrice, (state, action) => {
    state.price = action.payload;
  });
  builder.addCase(setDeposite, (state, action) => {
    state.deposite = action.payload;
  });
  builder.addCase(setDepositePercent, (state, action) => {
    state.depositePercent = action.payload;
  });
  builder.addCase(setPeriod, (state, action) => {
    state.period = action.payload;
  });
  builder.addCase(setMomCapital, (state, action) => {
    state.momCapital = action.payload;
  });
  builder.addCase(setCasco, (state, action) => {
    state.casco = action.payload;
  });
  builder.addCase(setInsurance, (state, action) => {
    state.insurance = action.payload;
  });
  builder.addCase(setIsRequestOpen, (state, action) => {
    state.isRequestOpen = action.payload;
  });
  builder.addCase(setNumberRequest, (state, action) => {
    state.numberRequest = action.payload;
  });
  builder.addCase(setForm, (state, action) => {
    state.form = action.payload;
  });
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
  builder.addCase(setIsIncorrectPrice, (state, action) => {
    state.isIncorrectPrice = action.payload;
  });
  builder.addCase(setIsModalOpen, (state, action) => {
    state.isModalOpen = action.payload;
  });
  builder.addCase(setIsLoginOpen, (state, action) => {
    state.isLoginOpen = action.payload;
  });
  builder.addCase(setIsFormValidate, (state, action) => {
    state.formValidate = action.payload;
  });
  builder.addCase(setIsVisiblePassword, (state, action) => {
    state.isVisible = action.payload;
  });
});

export { data, SelectOption };
