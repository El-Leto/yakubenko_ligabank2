import React, {useState} from 'react';
//import SwiperCore, { FreeMode, Thumbs, Pagination } from 'swiper';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
//import 'swiper/swiper.scss';
// import 'swiper/modules/free-mode/free-mode.scss';
// import 'swiper/modules/thumbs/thumbs.scss';
// import 'swiper/modules/pagination/pagination.scss';
import Tab from '../tab/tab';
import { tabs } from '../../const';
import styles from './tabs.module.scss';

// SwiperCore.use([FreeMode, Thumbs, Pagination]);

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
          >
            {
              tabs.map((tab) => (
                <SwiperSlide key={tab.id}>
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

// return (
//   <section className={styles.container}>
//     <div>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         className="mySwiper2"
//       >
//         <SwiperSlide
//           className="slide-tab"
//           tabIndex="0"
//           data-id="0"
//           onFocus={onSlideFocus}
//         >
//           <div>Вклады</div>
//         </SwiperSlide>
//         <SwiperSlide
//           className="slide-tab"
//           tabIndex="0"
//           data-id="1"
//           onFocus={onSlideFocus}
//         >
//           <div>Кредиты</div>
//         </SwiperSlide>
//         <SwiperSlide
//           className="slide-tab"
//           data-id="2"
//           tabIndex="0"
//           onFocus={onSlideFocus}
//         >
//           <div>Страхование</div>
//         </SwiperSlide>
//         <SwiperSlide
//           className="slide-tab"
//           data-id="3"
//           tabIndex="0"
//           onFocus={onSlideFocus}
//         >
//           <div>Онлайн-сервисы</div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//     <div>
//       <Swiper
//         pagination
//         thumbs={{ swiper: thumbsSwiper }}
//         className="mySwiper"
//       >
//         <SwiperSlide
//           className="slide-service"
//         >
//           <div>Вклады</div>
//         </SwiperSlide>
//         <SwiperSlide
//           className="slide-service"
//         >
//           <div>Кредиты</div>
//         </SwiperSlide>
//         <SwiperSlide
//           className="slide-service"
//         >
//           <div>Страхование</div>
//         </SwiperSlide>
//         <SwiperSlide
//           className="slide-service"
//         >
//           <div>Онлайн-сервисы</div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   </section>
// );
