import React, { useState } from 'react';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';
import Tab from '../tab/tab';
import { tabs } from '../../const';
import styles from './tabs.module.scss';

function Tabs() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1023px)',
  });


  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.container}>
      <h2 className="visually-hidden">Услуги</h2>
      {isDesktop &&
        <div>
          <div className={styles.tabs}>
            {
              tabs.map((tab) => (
                <button
                  className={cn(styles.button, activeTab === tab && styles.button_active)}
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    handleButtonClick(tab);
                  }}
                  aria-label={tab.tabName}
                >
                  <span className={cn(`${tab.name}`, styles.icon)}></span>
                  {tab.tabName}
                </button>
              ))
            }
          </div>
          <div className={styles.services}>
            <Tab tab={activeTab}/>
          </div>
        </div>}
      {isTabletOrMobile &&
        <div>
          <Swiper
            pagination
            className={cn('slides', styles.slides)}
          >
            {
              tabs.map((tab) => (
                <SwiperSlide key={tab.id} className={styles.service}>
                  <Tab tab={tab}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>}
    </section>
  );
}

export default Tabs;
