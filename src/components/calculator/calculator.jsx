import React from 'react';
import StepOne from '../step-one/step-one';
import StepTwo from '../step-two/step-two';
import styles from './calculator.module.scss';

function Calculator() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Кредитный калькулятор</h2>
      <form>
        <StepOne />
        <StepTwo />
      </form>
    </section>
  );
}

export default Calculator;
