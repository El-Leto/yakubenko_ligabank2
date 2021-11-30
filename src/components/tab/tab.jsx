import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab.module.scss';
import deposit from '../../images/service-0.jpg';
import credits from '../../images/service-1.jpg';
import insurance from '../../images/service-2.jpg';
import online from '../../images/service-3.jpg';

const images = [deposit, credits, insurance, online];


function Tab({ tab }) {

  const {tabName, id, title, advantages, isButton, text, linkText, link} = tab;

  return (
    <div className={styles.service}>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.list}>
          {advantages.map((item) => (
            <li key={item.id} className={styles.item}>{item.text}</li>
          ))}
        </ul>
        {isButton &&
          <button className={styles.button}>Узнать подробнее</button>}
        {text &&
        <p className={styles.text}>
          {text}
          {linkText && <a href={link} className={styles.link}>{linkText}</a>}
        </p>}
      </div>
      <img src={images[id]} alt={`${tabName}`} className={styles.image} width="440" height="290"/>
    </div>
  );
}

Tab.propTypes = {
  tab: PropTypes.shape({
    tabName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    advantages: PropTypes.array.isRequired,
    isButton: PropTypes.bool.isRequired,
    text: PropTypes.string,
    linkText: PropTypes.string,
    link: PropTypes.string,
    // good: PropTypes.string.isRequired,
    // bad: PropTypes.string.isRequired,
    // comment: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
  }),
};

export default Tab;
