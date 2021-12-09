import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styles from './tab.module.scss';
import deposit from '../../images/service-0.jpg';
import credits from '../../images/service-1.jpg';
import insurance from '../../images/service-2.jpg';
import online from '../../images/service-3.jpg';
import depositTablet from '../../images/service-0-tablet.jpg';
import creditsTablet from '../../images/service-1-tablet.jpg';
import insuranceTablet from '../../images/service-2-tablet.jpg';
import onlineTablet from '../../images/service-3-tablet.jpg';
import depositMobile from '../../images/service-0-mobile.jpg';
import creditsMobile from '../../images/service-1-mobile.jpg';
import insuranceMobile from '../../images/service-2-mobile.jpg';
import onlineMobile from '../../images/service-3-mobile.jpg';

const imagesDesktop = [deposit, credits, insurance, online];
const imagesTablet = [depositTablet, creditsTablet, insuranceTablet, onlineTablet];
const imagesMobile = [depositMobile, creditsMobile, insuranceMobile, onlineMobile];

function Tab({ tab }) {

  function Desktop({ children }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    return isDesktop ? children : null;
  }
  function Tablet({ children }) {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    return isTablet ? children : null;
  }
  function Mobile({ children }) {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  }

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
      <Desktop>
        <img src={imagesDesktop[id]} alt={`${tabName}`} className={styles.image} width="440" height="290"/>
      </Desktop>
      <Tablet>
        <img src={imagesTablet[id]} alt={`${tabName}`} className={styles.image} width="289" height="260"/>
      </Tablet>
      <Mobile>
        <img src={imagesMobile[id]} alt={`${tabName}`} className={styles.image} width="87" height="113"/>
      </Mobile>
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
  }),
};

export default Tab;
