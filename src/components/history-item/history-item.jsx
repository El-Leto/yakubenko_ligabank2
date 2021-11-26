import React from 'react';
import PropTypes from 'prop-types';
import styles from './history-item.module.scss';

function HistoryItem({ item }) {

  const {
    date,
    fromValue,
    fromCurrency,
    toValue,
    toCurrency,
  } = item;

  const convertingValue = (value) => value.replace('.', ',');

  return (
    <li className={styles.item}>
      <span className={styles.date}>{date}</span>
      <span className={styles.from}>{convertingValue(fromValue)} {fromCurrency}</span>
      <span>{convertingValue(toValue)} {toCurrency}</span>
    </li>
  );
}

HistoryItem.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string.isRequired,
    fromValue: PropTypes.string.isRequired,
    fromCurrency: PropTypes.string.isRequired,
    toValue: PropTypes.string.isRequired,
    toCurrency: PropTypes.string.isRequired,
  }).isRequired,
};

export default HistoryItem;
