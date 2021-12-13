import React from 'react';
import { useSelector } from 'react-redux';
import StepOne from '../step-one/step-one';
import StepTwo from '../step-two/step-two';
import StepThree from '../step-three/step-three';
import Offer from '../offer/offer';
import { getSelectedOption, getIsRequestOpen } from '../../store/data/selectors';
import { SelectOption } from '../../const';
import styles from './calculator.module.scss';

function Calculator() {

  const option = useSelector(getSelectedOption);
  const isRequestOpen = useSelector(getIsRequestOpen);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Кредитный калькулятор</h2>
      <form className={styles.form}>
        <StepOne />
        <StepTwo />
        {option !== SelectOption.INIT && <Offer />}
        {isRequestOpen && <StepThree />}
      </form>
    </section>
  );
}

export default Calculator;
