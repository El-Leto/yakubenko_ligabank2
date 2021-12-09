import { MONEY_ENDING } from './const';

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

const getPriceString = (number) => `${divideNumberByPieces(number)} ${numWord(number, MONEY_ENDING)}`;

export { getId, getNumber, divideNumberByPieces, getPriceString };
