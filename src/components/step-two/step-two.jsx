import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice, setDeposite } from '../../store/action';
import { getSelectedOption, getPrice, getDeposite } from '../../store/data/selectors';
import { SelectOption, Credit } from '../../store/data/data';
import { getNumber, getPriceString, divideNumberByPieces } from '../../utils';
import styles from './step-two.module.scss';

function StepTwo() {

  const dispatch = useDispatch();
  const option = useSelector(getSelectedOption);
  const price = useSelector(getPrice);
  const deposite = useSelector(getDeposite);

  const [isPriceFocus, setIsPriceFocus] = useState(false);
  const [isDepositeFocus, setIsDepositeFocus] = useState(false);

  const handlePriceChange = (evt) => {
    const value = getNumber(evt.target.value);

    if (value <= Credit[option].MAX) {
      dispatch(updatePrice(value));
    }
  };

  const handlePriceBlur = (evt) => {
    const value = getNumber(evt.target.value);
    setIsPriceFocus(false);

    if (value < Credit[option].MIN) {
      dispatch(updatePrice(Credit[option].MIN));
    }
  };

  const handlePriceFocus = (evt) => {
    setIsPriceFocus(true);
  };

  const getFormattingPrice = (value) => isPriceFocus ? divideNumberByPieces(value) : getPriceString(value);
  const getFormattingDeposite = (value) => isDepositeFocus ? divideNumberByPieces(value) : getPriceString(value);

  const getDepositeMin = (value) => Math.round(value / 100 * Credit[option].DEPOSITE_MIN_PERCENT);

  const depositeMin = getDepositeMin(price);

  useEffect(() => {
    if (option !== SelectOption.INIT) {
      dispatch(setDeposite(depositeMin));
    }
  }, [depositeMin, dispatch, option]);

  const handleDepositeChange = (evt) => {
    dispatch(setDeposite(getNumber(evt.target.value)));
  };

  const handleDepositeBlur = (evt) => {
    setIsDepositeFocus(false);

    const value = getNumber(evt.target.value);

    if (value > price) {
      dispatch(setDeposite(price));
    }
  };

  const handleDepositeFocus = (evt) => {
    setIsDepositeFocus(true);
  };

  return (
    option !== SelectOption.INIT &&
    <div className={styles.container}>
      <h3 className={styles.title}>Шаг 2. Введите параметры кредита</h3>
      <label
        className={styles.label}
      >
        {Credit[option].PRICE_NAME}
        <input
          className={styles.input}
          type="text"
          name="price"
          value={getFormattingPrice(price)}
          onChange={handlePriceChange}
          onBlur={handlePriceBlur}
          onFocus={handlePriceFocus}
        >
        </input>
        <span className={styles.text}>От {divideNumberByPieces(Credit[option].MIN)} до {getPriceString(Credit[option].MAX)}</span>
      </label>
      <label
        className={styles.label}
      >
        Первоначальный взнос
        <input
          className={styles.input}
          type="text"
          name="deposit"
          value={getFormattingDeposite(deposite)}
          onChange={handleDepositeChange}
          onBlur={handleDepositeBlur}
          onFocus={handleDepositeFocus}
        >
        </input>
      </label>
    </div>
  );
}

export default StepTwo;
