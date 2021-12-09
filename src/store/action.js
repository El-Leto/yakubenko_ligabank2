import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  SET_SELECTED_OPTION: 'setSelectedOption',
  UPDATE_PRICE: 'updatePrice',
  SET_DEPOSITE: 'setDeposite',
};

export const setSelectedOption = createAction(ActionType.SET_SELECTED_OPTION, (payload) => ({
  payload,
}));

export const updatePrice = createAction(ActionType.UPDATE_PRICE, (payload) => ({
  payload,
}));

export const setDeposite = createAction(ActionType.SET_DEPOSITE, (payload) => ({
  payload,
}));

