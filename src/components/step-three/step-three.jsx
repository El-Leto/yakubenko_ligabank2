import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../modal/modal';
import cn from 'classnames';
import { setIsRequestOpen, setForm, setIsModalOpen, setIsFormValidate } from '../../store/action';
import { getSelectedOption, getPrice, getDeposite, getPeriod, getNumberRequest, getForm, getIsModalOpen, getIsFormValidate } from '../../store/data/selectors';
import { Credit, InputsName } from '../../const';
import { getFormattingPrice, getFormattingPeriod } from '../../utils';
import styles from './step-three.module.scss';

function StepThree() {

  const dispatch = useDispatch();
  const option = useSelector(getSelectedOption);
  const price = useSelector(getPrice);
  const deposite = useSelector(getDeposite);
  const period = useSelector(getPeriod);
  const number = useSelector(getNumberRequest);
  const form = useSelector(getForm);
  const isModalOpen = useSelector(getIsModalOpen);
  const isValidate = useSelector(getIsFormValidate);

  const handleButtonClick = (evt) => {
    evt.preventDefault();

    if(!form.name || !form.phone || !form.email) {
      dispatch(setIsFormValidate(true));

      setTimeout(() => {
        dispatch(setIsFormValidate(false));
      }, 1000);
    }

    if(form.name || form.phone || form.email) {
      dispatch(setIsFormValidate(false));
      dispatch(setIsModalOpen(true));
    }
  };

  useEffect(() => {
    localStorage.setItem('Form', JSON.stringify(form));
  }, [form]);

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    dispatch(setForm({
      ...form,
      [name]: value,
    }));
  };

  return (
    <div className={isValidate ? cn(styles.container, styles.shake) : styles.container}>
      <h3 className={styles.title}>Шаг 3. Оформление заявки</h3>
      <dl className={styles.list}>
        <div className={styles.wrapper}>
          <dt className={styles.term}>Номер заявки</dt>
          <dd className={styles.description}>{`№ ${number.toString().padStart(4, '0')}`}</dd>
        </div>
        <div className={styles.wrapper}>
          <dt className={styles.term}>Цель кредита</dt>
          <dd className={styles.description}>{Credit[option].TEXT}</dd>
        </div>
        <div className={styles.wrapper}>
          <dt className={styles.term}>{Credit[option].PRICE_NAME}</dt>
          <dd className={styles.description}>{getFormattingPrice(price)}</dd>
        </div>
        <div className={styles.wrapper}>
          <dt className={styles.term}>Первоначальный взнос</dt>
          <dd className={styles.description}>{getFormattingPrice(deposite)}</dd>
        </div>
        <div className={styles.wrapper}>
          <dt className={styles.term}>Срок кредитования</dt>
          <dd className={styles.description}>{getFormattingPeriod(period)}</dd>
        </div>
      </dl>
      <div className={styles.form}>
        <label
          className="visually-hidden"
          htmlFor={InputsName.NAME}
        >Ваше имя
        </label>
        <input
          className={styles.input}
          id={InputsName.NAME}
          name={InputsName.NAME}
          type='text'
          autoFocus
          required
          placeholder='ФИО'
          onChange={handleInputChange}
        >
        </input>
        <label
          className="visually-hidden"
          htmlFor={InputsName.PHONE}
        >Ваше имя
        </label>
        <input
          className={styles.input}
          id={InputsName.PHONE}
          name={InputsName.PHONE}
          type='tel'
          required
          placeholder='Телефон'
          onChange={handleInputChange}
        >
        </input>
        <label
          className="visually-hidden"
          htmlFor={InputsName.EMAIL}
        >Ваше имя
        </label>
        <input
          className={styles.input}
          id={InputsName.EMAIL}
          name={InputsName.EMAIL}
          type='email'
          required
          placeholder='E-mail'
          onChange={handleInputChange}
        >
        </input>
      </div>
      <button
        type="submit"
        className={styles.button}
        onClick={handleButtonClick}
        aria-label="Отправить"
      >
        Отправить
      </button>
      <Modal
        isOpen={isModalOpen}
        isValidate={isValidate}
        onClose={() => {
          dispatch(setIsModalOpen(false));
          dispatch(setIsRequestOpen(false));
          document.body.style = 'overflow: visible;';
        }}
      />
    </div>
  );
}

export default StepThree;
