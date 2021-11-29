import React from 'react';
import Logo from '../logo/logo';
import styles from './header.module.scss';

function Header() {

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Услуги
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Рассчитать кредит
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Конвертер валют
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.user}>
          <a className={styles.login} href="/">
            <svg className={styles.svg} width="20" height="22" viewBox="0 0 20 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z"/>
            </svg>
            Войти в Интернет-банк
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;