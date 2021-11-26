import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import axios from 'axios';
import Input from '../input/input';
import Calendar from '../calendar/calendar';
import { addHistory, addRates } from '../../store/actions';
import { getConvertedValue } from '../utils';
import styles from './converter.module.scss';
import { DEFAULT_VALUE, DEFAULT_CURRENCY_FROM, DEFAULT_CURRENCY_TO, LabelValues } from '../utils';

const BACKEND_URL = 'https://openexchangerates.org/api/historical';
const APP_ID = '.json?app_id=145895ed17ed424dbfa93fe9506c1975';

let id = 1;


function Converter() {
  const currentDate = new Date();

  const dispatch = useDispatch();
  const rates = useSelector((state) => state.rates);

  const [date, setDate] = useState(currentDate);
  const [fromValue, setFromValue] = useState(DEFAULT_VALUE);
  const [fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCY_FROM );
  const [toValue, setToValue] = useState(DEFAULT_VALUE);
  const [toCurrency, setToCurrency] = useState(DEFAULT_CURRENCY_TO);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/${dayjs(date).format('YYYY-MM-DD')}${APP_ID}`)
      .then(({ data }) => {
        const dataRates = data.rates;
        dispatch(addRates(data.rates));
        setToValue(
          getConvertedValue(
            (+fromValue / dataRates[fromCurrency]) * dataRates[toCurrency],
          ),
        );
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, dispatch]);

  const handleFromValueChange = (evt) => {
    const value = evt.target.value.replace(/^0+/, '');

    setFromValue(value);
    setToValue(
      getConvertedValue((+value / rates[fromCurrency]) * rates[toCurrency]),
    );
  };

  const handleFromCurrencyChange = (evt) => {
    const value = evt.target.value;

    setFromCurrency(value);
    setToValue(
      getConvertedValue((+fromValue / rates[value]) * rates[toCurrency]),
    );
  };

  const handleToValueChange = (evt) => {
    const value = evt.target.value.replace(/^0+/, '');

    setToValue(value);
    setFromValue(
      getConvertedValue((+value * rates[fromCurrency]) / rates[toCurrency]),
    );
  };

  const handleToCurrencyChange = (evt) => {
    const value = evt.target.value;

    setToCurrency(value);
    setToValue(
      getConvertedValue((+fromValue / rates[fromCurrency]) * rates[value]),
    );
  };

  const handleDataChange = (selectedDates) => {
    const selectedDate = selectedDates[0];
    setDate(selectedDate);
  };

  const handleButtonClick = (evt) => {
    evt.preventDefault();

    dispatch(addHistory({
      id: id++,
      date: dayjs(date).format('DD.MM.YYYY'),
      fromValue,
      fromCurrency,
      toValue,
      toCurrency,
    }));
  };

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>Конвертер валют</h2>
      </div>
      <form className={styles.form}>
        <Input
          isFirst
          labelValue={LabelValues.FROM}
          inputValue={fromValue}
          currencyValue={fromCurrency}
          onInputChange={handleFromValueChange}
          onCurrencyChange={handleFromCurrencyChange}
        />
        <Input
          labelValue={LabelValues.TO}
          inputValue={toValue}
          currencyValue={toCurrency}
          onInputChange={handleToValueChange}
          onCurrencyChange={handleToCurrencyChange}
        />
        <Calendar
          date={date}
          onDataChange={handleDataChange}
        />
        <button
          className={styles.button}
          type="submit"
          onClick={handleButtonClick}
        >
          Сохранить результат
        </button>
      </form>
    </section>
  );
}

export default Converter;
