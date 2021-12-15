import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { setIsLoginOpen, setIsVisiblePassword, setUser } from '../../store/action';
import { getIsVisiblePassword, getUser } from '../../store/data/selectors';
import logo from '../../images/logo-login.svg';
import styles from './login.module.scss';

function Login({ isOpen, onClose }) {

  const dispatch = useDispatch();

  const isVisible = useSelector(getIsVisiblePassword);
  const user = useSelector(getUser);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  const handleButtonClick = () => {
    dispatch(setIsLoginOpen(false));
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    dispatch(setUser({
      ...user,
      [name]: value,
    }));
  };

  return (
    <ReactModal
      className={styles.modal}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => onClose(false)}
      style={{
        overlay: { backgroundColor: 'rgba(88, 87, 87, 0.6)', zIndex: '10000' },
      }}
      ariaHideApp={false}
    >
      <div className={styles.top}>
        <img src={logo} alt="ligabank logo" width="150" height="27"/>
        <button className={styles.button_close} onClick={onClose} type="button" aria-label="Закрыть" />
      </div>
      <form className={styles.form}>
        <label
          className={styles.label}
        >
          <span className={styles.text}>Логин</span>
          <input
            className={styles.input}
            type="text"
            autoFocus
            aria-label="Логин"
            required
            onChange={handleInputChange}
            name="login"
          >
          </input>
        </label>
        <label
          className={styles.label}
        >
          <span className={styles.text}>Пароль</span>
          <input
            className={styles.input}
            aria-label="Пароль"
            required
            type={isVisible ? 'text' : 'password'}
            onChange={handleInputChange}
            name="password"
          >
          </input>
          <button
            className={styles.button_visible}
            onMouseDown={() => {dispatch(setIsVisiblePassword(true));}}
            onMouseUp={() => {dispatch(setIsVisiblePassword(false));}}
            onMouseLeave={() => {dispatch(setIsVisiblePassword(false));}}
            onTouchStart={() => {dispatch(setIsVisiblePassword(true));}}
            onTouchEnd={() => {dispatch(setIsVisiblePassword(false));}}
            type="button"
            aria-label="Посмотреть пароль"
          />
        </label>
        <a className={styles.link} href="/">Забыли пароль?</a>
        <button
          type="button"
          className={styles.button}
          onClick={handleButtonClick}
          aria-label="Войти"
        >
            Войти
        </button>
      </form>
    </ReactModal>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Login };
