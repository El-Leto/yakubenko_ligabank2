import React from 'react';
import styles from './banner.module.scss';

function Banner() {
  return (
    <section className={styles.promo}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>Лига Банк</h2>
          <p className={styles.text}>Кредиты на любой случай</p>
          <a className={styles.button} href="/">Рассчитать кредит</a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
