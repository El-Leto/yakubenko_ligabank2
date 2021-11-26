const FIX_VALUE = 4;

export const WEEK = 7;

export const DEFAULT_VALUE = '0';

export const DEFAULT_CURRENCY_FROM = 'RUB';

export const DEFAULT_CURRENCY_TO = 'USD';

export const LabelValues = {
  FROM: 'У меня есть',
  TO: 'Хочу приобрести',
};

export const getConvertedValue = (value) => value.toFixed(FIX_VALUE).replace(/\.0+$/, '');
