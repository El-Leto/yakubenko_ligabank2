import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import {
  updatePrice,
  setDeposite,
  setDepositePercent,
  setPeriod,
  setMomCapital,
  setCasco,
  setInsurance,
  setIsIncorrectPrice
} from '../../store/action';
import {
  getSelectedOption,
  getPrice,
  getDeposite,
  getPeriod,
  getMomCapital,
  getCasco,
  getInsurance,
  getIsIncorrectPrice } from '../../store/data/selectors';
import { Credit, buttonsNames, SelectOption } from '../../const';
import { getNumber, getPriceString, divideNumberByPieces, getFormattingPrice, getFormattingDeposite, getFormattingPeriod} from '../../utils';
import styles from './step-two.module.scss';

function StepTwo() {

  const dispatch = useDispatch();
  const option = useSelector(getSelectedOption);
  const price = useSelector(getPrice);
  const deposite = useSelector(getDeposite);
  const period = useSelector(getPeriod);
  const momCapital = useSelector(getMomCapital);
  const casco = useSelector(getCasco);
  const insurance = useSelector(getInsurance);
  const incorrectPrice = useSelector(getIsIncorrectPrice);

  const [isPriceFocus, setIsPriceFocus] = useState(false);
  const [isDepositeFocus, setIsDepositeFocus] = useState(false);
  const [isPeriodFocus, setIsPeriodFocus] = useState(false);

  const getDepositeMin = (value) => Math.round(value / Credit[option].DEPOSITE_MAX_PERCENT * Credit[option].DEPOSITE_MIN_PERCENT);

  const depositeMin = getDepositeMin(price);

  const getDepositePercent = Math.round(deposite / getNumber(price) * Credit[option].DEPOSITE_MAX_PERCENT).toString();

  useEffect(() => {
    if (option !== SelectOption.INIT) {
      dispatch(setDeposite(depositeMin));
      dispatch(setDepositePercent(Credit[option].DEPOSITE_MIN_PERCENT));
    }
  }, [depositeMin, dispatch, option]);

  const handlePriceChange = (evt) => {
    const value = getNumber(evt.target.value);
    dispatch(setIsIncorrectPrice(false));

    if (value <= Credit[option].MAX) {
      dispatch(updatePrice(value));
    }
  };

  const handlePriceBlur = (evt) => {
    const value = getNumber(evt.target.value);
    setIsPriceFocus(false);

    if (value < Credit[option].MIN) {
      dispatch(setIsIncorrectPrice(true));
    }

    if (value > Credit[option].MAX) {
      dispatch(setIsIncorrectPrice(true));
    }

    if (value >= Credit[option].MIN && value <= Credit[option].MAX) {
      dispatch(setIsIncorrectPrice(false));
    }
  };

  const handlePriceFocus = () => {
    setIsPriceFocus(true);
    dispatch(setIsIncorrectPrice(false));
  };

  const handleDepositeChange = (evt) => {
    const value = getNumber(evt.target.value);

    dispatch(setDeposite(getNumber(value)));
    dispatch(setDepositePercent(getNumber(value) / getNumber(price) * Credit[option].DEPOSITE_MAX_PERCENT));
  };

  const handleDepositeBlur = (evt) => {
    setIsDepositeFocus(false);

    const value = getNumber(evt.target.value);

    if (value > price) {
      dispatch(setDeposite(price));
    }

    if (value < depositeMin) {
      dispatch(setDeposite(depositeMin));
    }
  };

  const handleDepositeFocus = () => {
    setIsDepositeFocus(true);
  };

  const handleDepositeRangeChange = (evt) => {
    const value = getNumber(evt.target.value);
    dispatch(setDeposite(getNumber(price) / Credit[option].DEPOSITE_MAX_PERCENT * value));
    dispatch(setDepositePercent(getNumber(value)));
  };

  const handlePeriodChange = (evt) => {
    dispatch(setPeriod(getNumber(evt.target.value)));
  };

  const handlePeriodBlur = (evt) => {
    setIsPeriodFocus(false);

    const value = getNumber(evt.target.value);

    if (value > Credit[option].PERIOD_MAX) {
      dispatch(setPeriod(Credit[option].PERIOD_MAX));
    }

    if (value < Credit[option].PERIOD_MIN) {
      dispatch(setPeriod(Credit[option].PERIOD_MIN));
    }
  };

  const handlePeriodFocus = () => {
    setIsPeriodFocus(true);
  };

  const handleMomCapitalChange = () => {
    dispatch(setMomCapital(!momCapital));
  };

  const handleCascoChange = () => {
    dispatch(setCasco(!casco));
  };

  const handleInsuranceChange = () => {
    dispatch(setInsurance(!insurance));
  };

  const handleButtonClick = (evt) => {
    const name = evt.target.name;

    if ((price <= Credit[option].MIN && name === buttonsNames.MINUS) || (price >= Credit[option].MAX && name === buttonsNames.PLUS)) {
      return;
    }

    if (name === buttonsNames.MINUS) {
      const newPrice = price - Credit[option].CREDIT_STEP;
      dispatch(updatePrice(newPrice));
    }

    if (name === buttonsNames.PLUS) {
      const newPrice = price + Credit[option].CREDIT_STEP;
      dispatch(updatePrice(newPrice));
    }
  };

  return (
    option !== SelectOption.INIT &&
    <div className={styles.container}>
      <h3 className={styles.title}>Шаг 2. Введите параметры кредита</h3>
      <label
        className={incorrectPrice ? cn(styles.label, styles.label_error) : styles.label}
      >
        {Credit[option].PRICE_NAME}
        <input
          className={incorrectPrice ? cn(styles.input, styles.input_error) : styles.input}
          type="text"
          name="price"
          value={getFormattingPrice(price, isPriceFocus)}
          onChange={handlePriceChange}
          onBlur={handlePriceBlur}
          onFocus={handlePriceFocus}
        >
        </input>
      </label>
      <button
        type="button"
        name={buttonsNames.MINUS}
        className={cn(styles.button, styles.button__minus)}
        onClick={handleButtonClick}
        aria-label="Уменьшить"
      >
      </button>
      <button
        type="button"
        name={buttonsNames.PLUS}
        onClick={handleButtonClick}
        className={cn(styles.button, styles.button__plus)}
        aria-label="Увеличить"
      >
      </button>
      <span className={styles.text}>От {divideNumberByPieces(Credit[option].MIN)} до {getPriceString(Credit[option].MAX)}</span>
      <label
        className={styles.label}
      >
        Первоначальный взнос
        <input
          className={styles.input}
          type="text"
          name="deposit"
          value={getFormattingDeposite(deposite, isDepositeFocus)}
          onChange={handleDepositeChange}
          onBlur={handleDepositeBlur}
          onFocus={handleDepositeFocus}
        >
        </input>
      </label>
      <input
        className={styles.range}
        type="range"
        value={getDepositePercent}
        min={Credit[option].DEPOSITE_MIN_PERCENT}
        max={Credit[option].DEPOSITE_MAX_PERCENT}
        step={Credit[option].DEPOSITE_STEP}
        onChange={handleDepositeRangeChange}
      >
      </input>
      <div className={styles.range__percent}>
        <span className={styles.text}>{`${Credit[option].DEPOSITE_MIN_PERCENT}%`}</span>
      </div>
      <label
        className={cn(styles.label, styles.label__last)}
      >
        Срок кредитования
        <input
          className={styles.input}
          type="text"
          name="deposit"
          value={getFormattingPeriod(period, isPeriodFocus)}
          onChange={handlePeriodChange}
          onBlur={handlePeriodBlur}
          onFocus={handlePeriodFocus}
        >
        </input>
      </label>
      <input
        className={styles.range}
        type="range"
        value={period}
        min={Credit[option].PERIOD_MIN}
        max={Credit[option].PERIOD_MAX}
        step={Credit[option].PERIOD_STEP}
        onChange={handlePeriodChange}
      >
      </input>
      <div className={cn(styles.wrapper, styles.range__percent)}>
        <span className={styles.text}>{getFormattingPeriod(Credit[option].PERIOD_MIN, isPeriodFocus)}</span>
        <span className={styles.text}>{getFormattingPeriod(Credit[option].PERIOD_MAX, isPeriodFocus)}</span>
      </div>
      {
        option === SelectOption.HOUSE &&
        <div>
          <label className={styles.checkbox}>
            <input
              className={styles.checkbox_input}
              type="checkbox"
              onChange={handleMomCapitalChange}
            />
            <span className={styles.checkbox_text}>Использовать материнский капитал</span>
          </label>
        </div>
      }
      {
        option === SelectOption.CAR &&
        <div>
          <label className={styles.checkbox}>
            <input
              className={styles.checkbox_input}
              type="checkbox"
              onChange={handleCascoChange}
            />
            <span className={styles.checkbox_text}>Оформить КАСКО в нашем банке</span>
          </label>
          <label className={styles.checkbox}>
            <input
              className={styles.checkbox_input}
              type="checkbox"
              onChange={handleInsuranceChange}
            />
            <span className={styles.checkbox_text}>Оформить Страхование жизни в нашем банке</span>
          </label>
        </div>
      }
    </div>
  );
}

export default StepTwo;
