import React from 'react';
import { Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import cn from 'classnames';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import styles from './slider.module.scss';

function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      slidesPerView={1}
      a11y
      loop
      pagination={{ clickable: true }}
      autoplay={{ 'delay': 4000, 'disableOnInteraction': false }}
    >
      <SwiperSlide>
        <section className={cn(styles.promo, styles.promo_first)}>
          <div className={styles.wrapper}>
            <h2 className={cn(styles.title, styles.title_first)}>Лига Банк</h2>
            <p className={cn(styles.text, styles.text_first)}>Кредиты на любой случай</p>
            <a className={styles.button} href="/">Рассчитать кредит</a>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className={cn(styles.promo, styles.promo_second)}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Лига Банк</h2>
            <p className={styles.text}>Ваша уверенность в завтрашнем дне</p>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className={cn(styles.promo, styles.promo_third)}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Лига Банк</h2>
            <p className={styles.text}>Всегда рядом</p>
            <a className={cn(styles.button, styles.button_add)} href="/">Найти отделение</a>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
