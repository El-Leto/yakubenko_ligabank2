import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { setSelectedOption } from '../../store/action';
import { getSelectedOption } from '../../store/data/selectors';
import { SelectOption } from '../../const';
import { Credit } from '../../const';
import styles from './step-one.module.scss';

function StepOne() {

  const dispatch = useDispatch();
  const option = useSelector(getSelectedOption);

  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (evt) => {
    dispatch(setSelectedOption(evt.target.htmlFor));
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Шаг 1. Цель кредита</h3>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={cn(styles.button, isOpen && styles.button_open)}
      >
        {Credit[option].TYPE}
      </button>
      {isOpen &&
      <ul className={styles.list}>
        <li className={styles.item}>
          <input
            type="radio"
            name="credit"
            id={SelectOption.HOUSE}
            className="visually-hidden"
            tabIndex="-1"
          >
          </input>
          <label
            htmlFor={SelectOption.HOUSE}
            className={styles.label}
            onClick={handleItemClick}
            onKeyPress={handleItemClick}
            tabIndex="0"
          >
            {Credit['house'].TYPE}
          </label>
        </li>
        <li className={styles.item}>
          <input
            type="radio"
            name="credit"
            id={SelectOption.CAR}
            className="visually-hidden"
            tabIndex="-1"
          >
          </input>
          <label
            htmlFor={SelectOption.CAR}
            className={styles.label}
            onClick={handleItemClick}
            onKeyPress={handleItemClick}
            tabIndex="0"
          >
            {Credit['car'].TYPE}
          </label>
        </li>
      </ul>}
    </div>
  );
}

export default StepOne;
