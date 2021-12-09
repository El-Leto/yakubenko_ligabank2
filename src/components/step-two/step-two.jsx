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

  const [isFocus, setIsFocus] = useState(false);

  const handlePriceChange = (evt) => {
    const value = getNumber(evt.target.value);

    if (value <= Credit[option].MAX) {
      dispatch(updatePrice(value));
    }
  };

  const handlePriceBlur = (evt) => {
    const value = getNumber(evt.target.value);
    setIsFocus(false);

    if (value < Credit[option].MIN) {
      dispatch(updatePrice(Credit[option].MIN));
    }
  };

  const handlePriceFocus = (evt) => {
    setIsFocus(true);
  };

  const getFormattingNumber = (value) => isFocus ? divideNumberByPieces(value) : getPriceString(value);

  const getDepositeMin = (value) => Math.round(value / 100 * Credit[option].DEPOSITE_MIN_PERCENT);

  const depositeMin = getDepositeMin(price);

  useEffect(() => {
    if (option !== SelectOption.INIT) {
      dispatch(setDeposite(depositeMin));
    }
  }, [depositeMin, dispatch, option]);

  const handleDepositeChange = (evt) => {
    evt.preventDefault();
    dispatch(setDeposite(evt.target.value));
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
          value={getFormattingNumber(price)}
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
          value={getFormattingNumber(deposite)}
          onChange={handleDepositeChange}
        >
        </input>
      </label>
    </div>
  );
}

export default StepTwo;
