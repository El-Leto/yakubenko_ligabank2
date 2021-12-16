import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectedOption,
  getPrice,
  getDeposite,
  getDepositePercent,
  getPeriod,
  getMomCapital,
  getCasco,
  getInsurance,
  getNumberRequest,
  getIsIncorrectPrice
} from '../../store/data/selectors';
import { SelectOption } from '../../const';
import { setIsRequestOpen, setNumberRequest } from '../../store/action';
import { Credit, NUMBER_STEP } from '../../const';
import {
  totalPrice,
  getHouseRate,
  getCarRate,
  getMonthlyPayment,
  getPriceString,
  getIncome
} from '../../utils';
import styles from './offer.module.scss';

function Offer() {

  const dispatch = useDispatch();
  const option = useSelector(getSelectedOption);
  const price = useSelector(getPrice);
  const deposite = useSelector(getDeposite);
  const depositePercent = useSelector(getDepositePercent);
  const period = useSelector(getPeriod);
  const momCapital = useSelector(getMomCapital);
  const casco = useSelector(getCasco);
  const insurance = useSelector(getInsurance);
  const number = useSelector(getNumberRequest);
  const incorrectPrice = useSelector(getIsIncorrectPrice);

  const total = option === SelectOption.HOUSE ? totalPrice(price, deposite, momCapital) : price - deposite;
  const rate = option === SelectOption.HOUSE ? getHouseRate(depositePercent) : getCarRate(price, casco, insurance);
  const monthlyPayment = getMonthlyPayment(total, rate, period);
  const income = getIncome(monthlyPayment);

  const handleButtonClick = () => {
    dispatch(setIsRequestOpen(true));
    dispatch(setNumberRequest(number + NUMBER_STEP));
  };

  return (
    <div className={styles.container}>
      {total < Credit[option].CREDIT_MIN ?
        <div className={styles.wrapper_add}>
          <p className={styles.text_message}>{`Наш банк не выдаёт ${Credit[option].CREDIT_TEXT} меньше ${getPriceString(Credit[option].CREDIT_MIN)}.`}</p>
          <p className={styles.text_message_add}>Попробуйте использовать другие параметры для расчёта.</p>
        </div> :
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Наше предложение</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.number}>{getPriceString(total)}</p>
              <p className={styles.text}>{Credit[option].PRICE_TEXT}</p>
            </li>
            <li className={styles.item}>
              <p className={styles.number}>{`${rate}%`}</p>
              <p className={styles.text}>Процентная ставка</p>
            </li>
            <li className={styles.item}>
              <p className={styles.number}>{getPriceString(monthlyPayment)}</p>
              <p className={styles.text}>Ежемесячный платеж</p>
            </li>
            <li className={styles.item}>
              <p className={styles.number}>{getPriceString(income)}</p>
              <p className={styles.text}>Необходимый доход</p>
            </li>
          </ul>
          <button
            type="button"
            className={styles.button}
            onClick={handleButtonClick}
            aria-label="Оформить заявку"
            disabled={incorrectPrice}
          >
            Оформить заявку
          </button>
        </div>}
    </div>
  );
}

export default Offer;
