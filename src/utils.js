import { Credit, MONEY_ENDINGS, PERIOD_ENDINGS, MAX_PERCENT_FOR_INCOME, MOM_CAPITAL } from './const';

const getId = () => Math.random().toString(36).slice(2);

const getNumber = (value) => +value.toString().replace(/[^0-9]/g, '');

const divideNumberByPieces = (number) => number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

const numWord = (value, words) => {
  value = Math.abs(value) % 100;
  const num = value % 10;
  if(value > 10 && value < 20) {return words[2];}
  if(num > 1 && num < 5) {return words[1];}
  if(num === 1) {return words[0];}
  return words[2];
};

const getPriceString = (number) => `${divideNumberByPieces(number)} ${numWord(number, MONEY_ENDINGS)}`;
const getPeriodString = (number) => `${getNumber(number)} ${numWord(number, PERIOD_ENDINGS)}`;

const totalPrice = (price, deposite, momCapital) => momCapital ? price - deposite - MOM_CAPITAL : price - deposite;

const getFormattingPrice = (value, state) => state ? divideNumberByPieces(value) : getPriceString(value);

const getFormattingDeposite = (value, state) => state ? divideNumberByPieces(value) : getPriceString(value);

const getFormattingPeriod = (value, state) => state ? divideNumberByPieces(value) : getPeriodString(value);

const getHouseRate = (depositePercent) => depositePercent < Credit['house'].RATE_DIFFERENCE ? Credit['house'].RATE_MAX : Credit['house'].RATE_MIN;

const getCarRate = (price, casco, insurance) => {
  if(casco && insurance) {
    return Credit['car'].RATE_CASCO_AND_INSURANCE;
  }
  if(casco || insurance) {
    return Credit['car'].RATE_CASCO_OR_INSURANCE;
  }
  if(price < Credit['car'].RATE_DIFFERENCE_PRICE) {
    return Credit['car'].RATE_PRICE_MIN;
  }

  if(price >= Credit['car'].RATE_DIFFERENCE_PRICE) {
    return Credit['car'].RATE_PRICE_MAX;
  }
};

const getMonthlyPayment = (price, rate, period) => {
  const ps = rate / 100 / 12;
  const kp = period * 12;
  const total = price * (ps + (ps / (Math.pow((1 + ps), kp) - 1)));

  return total.toFixed(0);
};

const getIncome = (payment) => (payment * 100 / MAX_PERCENT_FOR_INCOME).toFixed(0);

export {
  getId,
  getNumber,
  divideNumberByPieces,
  getPriceString,
  getPeriodString,
  totalPrice,
  getFormattingPrice,
  getFormattingDeposite,
  getFormattingPeriod,
  getHouseRate,
  getCarRate,
  getMonthlyPayment,
  getIncome
};
