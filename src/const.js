import { getId } from './utils';

const Credit = {
  init: {
    TYPE: 'Выберите цель кредита',
  },
  house: {
    TYPE: 'Ипотечное кредитование',
    PRICE_NAME: 'Стоимость недвижимости',
    PRICE_TEXT: 'Сумма ипотеки',
    CREDIT_TEXT: 'ипотечные кредиты',
    TEXT: 'Ипотека',
    MIN: 1200000,
    MAX: 25000000,
    CREDIT_MIN: 500000,
    CREDIT_STEP: 100000,
    DEPOSITE_MIN_PERCENT: 10,
    DEPOSITE_MAX_PERCENT: 100,
    DEPOSITE_STEP: 5,
    PERIOD_MIN: 5,
    PERIOD_MAX: 30,
    PERIOD_STEP: 1,
    RATE_MIN: 8.5,
    RATE_MAX: 9.4,
    RATE_DIFFERENCE: 15,
  },
  car: {
    TYPE: 'Автомобильное кредитование',
    PRICE_NAME: 'Стоимость автомобиля',
    PRICE_TEXT: 'Сумма автокредита',
    CREDIT_TEXT: 'автокредиты',
    TEXT: 'Автокредит',
    MIN: 500000,
    MAX: 5000000,
    CREDIT_MIN: 200000,
    CREDIT_STEP: 50000,
    DEPOSITE_MIN_PERCENT: 20,
    DEPOSITE_MAX_PERCENT: 100,
    DEPOSITE_STEP: 5,
    PERIOD_MIN: 1,
    PERIOD_MAX: 5,
    PERIOD_STEP: 1,
    RATE_CASCO_AND_INSURANCE: 3.5,
    RATE_CASCO_OR_INSURANCE: 8.5,
    RATE_PRICE_MIN: 16,
    RATE_PRICE_MAX: 15,
    RATE_DIFFERENCE_PRICE: 2000000,
  },
};

const SelectOption = {
  INIT: 'init',
  HOUSE: 'house',
  CAR: 'car',
};

const MONEY_ENDING = ['рубль', 'рубля', 'рублей'];
const PERIOD_ENDING = ['год', 'года', 'лет'];
const MOM_CAPITAL = 470000;
const buttonsNames = {
  MINUS: 'minus',
  PLUS: 'plus',
};

const tabs = [
  {
    id: 0,
    name: 'deposit',
    tabName: 'Вклады',
    title: 'Вклады Лига Банка – это выгодная инвестиция в свое будущее',
    advantages: [{id: getId(), text: 'Проценты по вкладам до 7%'}, {id: getId(), text: 'Разнообразные условия'}, {id: getId(), text: 'Возможность ежемесячной капитализации или вывод процентов на банковскую карту'}],
    isButton: true,
  },
  {
    id: 1,
    name: 'credits',
    tabName: 'Кредиты',
    title: 'Лига Банк выдает кредиты под\u00A0любые\u00A0цели',
    advantages: [{id: getId(), text: 'Ипотечный кредит'}, {id: getId(), text: 'Автокредит'}, {id: getId(), text: 'Потребительский кредит'}],
    isButton: false,
    text: 'Рассчитайте ежемесячный платеж и\u00A0ставку по кредиту воспользовавшись нашим ',
    linkText: 'кредитным калькулятором',
    link: '#calculator',
  },
  {
    id: 2,
    name: 'insurance',
    tabName: 'Страхование',
    title: 'Лига Страхование — застрахуем все\u00A0что\u00A0захотите',
    advantages: [{id: getId(), text: 'Автомобильное страхование'}, {id: getId(), text: 'Страхование жизни и здоровья'}, {id: getId(), text: 'Страхование недвижимости'}],
    isButton: true,
  },
  {
    id: 3,
    name: 'online',
    tabName: 'Онлайн-сервисы',
    title: 'Лига Банк — это огромное количество онлайн-сервисов для вашего удобства',
    advantages: [{id: getId(), text: 'Мобильный банк, который\u00A0всегда\u00A0под\u00A0рукой'}, {id: getId(), text: 'Приложение Лига-проездной позволит вам\u00A0оплачивать билеты по всему миру'}],
    isButton: true,
  },
];

const MAX_PERCENT_FOR_INCOME = 45;

const NUMBER_STEP = 1;

const InputsName = {
  NAME: 'name',
  PHONE: 'phone',
  EMAIL: 'email',
};

export {
  Credit,
  tabs,
  MONEY_ENDING,
  PERIOD_ENDING,
  MAX_PERCENT_FOR_INCOME,
  MOM_CAPITAL,
  buttonsNames,
  NUMBER_STEP,
  InputsName,
  SelectOption
};
