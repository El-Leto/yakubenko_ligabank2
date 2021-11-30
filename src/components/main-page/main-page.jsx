import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
// import Converter from '../converter/converter';
// import History from '../history/history';
import styles from './main-page.module.scss';

function ConverterPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Slider />
        <Tabs />
        {/* <Converter />
        <History /> */}
      </main>
      <Footer />
    </div>
  );
}

export default ConverterPage;
