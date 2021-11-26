import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './input.module.scss';

function Input({
  labelValue,
  inputValue,
  currencyValue,
  onInputChange,
  onCurrencyChange,
  isFirst = false,
}) {

  return (
    <div className={styles.container}>
      <label
        className={cn(isFirst && styles.image, styles.label)}
      >
        {labelValue}
        <input
          className={styles.input}
          type="number"
          placeholder="0"
          value={inputValue}
          onChange={onInputChange}
        />
      </label>
      <select
        className={styles.select}
        onChange={onCurrencyChange}
        value={currencyValue}
      >
        <option>RUB</option>
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>CNY</option>
      </select>
    </div>
  );
}

Input.propTypes = {
  isFirst: PropTypes.bool,
  labelValue: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  currencyValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default Input;
