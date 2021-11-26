import React from 'react';
import { useDispatch } from 'react-redux';
import { clearHistory } from '../../store/actions';
import styles from './history.module.scss';
import HistoryList from '../history-list/history-list';

function History() {

  const dispatch = useDispatch();

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(clearHistory());
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>История конвертации</h2>
      <HistoryList />
      <button
        className={styles.button}
        type="submit"
        onClick={handleButtonClick}
      >
        Очистить историю
      </button>
    </section>
  );
}

export default History;
