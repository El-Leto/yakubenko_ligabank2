import { getId } from './utils';

const MONEY_ENDING = ['рубль', 'рубля', 'рублей'];

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

export { tabs, MONEY_ENDING };
