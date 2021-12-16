import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  SET_SELECTED_OPTION: 'setSelectedOption',
  UPDATE_PRICE: 'updatePrice',
  SET_DEPOSITE: 'setDeposite',
  SET_DEPOSITE_PERCENT: 'setDepositePercent',
  SET_PERIOD: 'setPeriod',
  SET_MOM_CAPITAL: 'setMomCapital',
  SET_CASCO: 'setCasco',
  SET_INSURANCE: 'setInsurance',
  SET_IS_REQUEST_OPEN: 'setIsRequestOpen',
  SET_NUMBER_REQUEST: 'setNumberRequest',
  SET_FORM: 'setForm',
  SET_USER: 'setUser',
  SET_IS_INCORRECT_PRICE: 'setIsIncorrectPrice',
  SET_IS_MODAL_OPEN: 'setIsModalOpen',
  SET_IS_LOGIN_OPEN: 'setIsLoginOpen',
  SET_IS_FORM_VALIDATE: 'setIsFormValidate',
  SET_IS_VISIBLE_PASSWORD: 'setIsVisiblePassword',
};

const setSelectedOption = createAction(ActionType.SET_SELECTED_OPTION, (payload) => ({
  payload,
}));

const updatePrice = createAction(ActionType.UPDATE_PRICE, (payload) => ({
  payload,
}));

const setDeposite = createAction(ActionType.SET_DEPOSITE, (payload) => ({
  payload,
}));

const setDepositePercent = createAction(ActionType.SET_DEPOSITE_PERCENT, (payload) => ({
  payload,
}));

const setPeriod = createAction(ActionType.SET_PERIOD, (payload) => ({
  payload,
}));

const setMomCapital = createAction(ActionType.SET_MOM_CAPITAL, (payload) => ({
  payload,
}));

const setCasco = createAction(ActionType.SET_CASCO, (payload) => ({
  payload,
}));

const setInsurance = createAction(ActionType.SET_INSURANCE, (payload) => ({
  payload,
}));

const setIsRequestOpen = createAction(ActionType.SET_IS_REQUEST_OPEN, (payload) => ({
  payload,
}));

const setNumberRequest = createAction(ActionType.SET_NUMBER_REQUEST, (payload) => ({
  payload,
}));

const setForm = createAction(ActionType.SET_FORM, (payload) => ({
  payload,
}));

const setUser = createAction(ActionType.SET_USER, (payload) => ({
  payload,
}));

const setIsIncorrectPrice = createAction(ActionType.SET_IS_INCORRECT_PRICE, (payload) => ({
  payload,
}));

const setIsModalOpen = createAction(ActionType.SET_IS_MODAL_OPEN, (payload) => ({
  payload,
}));

const setIsLoginOpen = createAction(ActionType.SET_IS_LOGIN_OPEN, (payload) => ({
  payload,
}));

const setIsFormValidate = createAction(ActionType.SET_IS_FORM_VALIDATE, (payload) => ({
  payload,
}));

const setIsVisiblePassword = createAction(ActionType.SET_IS_VISIBLE_PASSWORD, (payload) => ({
  payload,
}));

export {
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
};
