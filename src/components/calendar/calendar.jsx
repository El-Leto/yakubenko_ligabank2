import React from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import styles from './calendar.module.scss';
import 'flatpickr/dist/themes/material_green.css';
import { WEEK } from '../utils';

function Calendar({ date, onDataChange }) {

  const maxDate = new Date();
  const minDate = new Date();
  minDate.setDate((minDate).getDate() - WEEK);

  return (
    <Flatpickr
      className={styles.input}
      value={date}
      options={{
        dateFormat: 'j.n.Y',
        onChange: onDataChange,
        minDate: minDate,
        maxDate: maxDate,
      }}
    />
  );
}

Calendar.propTypes = {
  onDataChange: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
};

export default Calendar;
