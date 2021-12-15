import React from 'react';
import { YMaps, Map, ZoomControl, GeolocationControl, Placemark } from 'react-yandex-maps';
import pinIcon from '../../images/pin.svg';
import styles from './yandex-map.module.scss';

const LocationOption = {
  CENTER_LOCATION: [54.735152, 55.958736],
  ZOOM: 5,
  WIDTH: '100%',
  HEIGHT: '100%',
};

const ZoomControlOptions = {
  RIGHT: '13px',
  TOP: '205px',
  SIZE: 'small',
};

const GeolocationControlOptions = {
  RIGHT: '13px',
  TOP: '280px',
};

const PlacemarkOption = {
  iconLayout: 'default#image',
  iconImageHref: pinIcon,
  iconImageSize: [37, 42],
};

const markers = [
  {
    city: 'Москва',
    location: [55.753220, 37.622513],
  },
  {
    city: 'Саратов',
    location: [51.533562, 46.034266],
  },
  {
    city: 'Казань',
    location: [55.796127, 49.106414],
  },
  {
    city: 'Тюмень',
    location: [57.152985, 65.541227],
  },
  {
    city: 'Омск',
    location: [54.989347, 73.368221],
  },
];

function YandexMap() {

  return (
    <section className={styles.container} id="contacts">
      <h2 className={styles.title}>Отделения Лига Банка</h2>
      <div className={styles.wrapper}>
        <YMaps className={styles.wrapper}>
          <Map
            width={LocationOption.WIDTH}
            height={LocationOption.HEIGHT}
            defaultState={{
              center: LocationOption.CENTER_LOCATION,
              zoom: LocationOption.ZOOM,
            }}
          >
            <ZoomControl options={{
              position: {
                right: ZoomControlOptions.RIGHT,
                top: ZoomControlOptions.TOP,
              },
              size: ZoomControlOptions.SIZE,
            }}
            />
            <GeolocationControl options={{
              position: {
                right: GeolocationControlOptions.RIGHT,
                top: GeolocationControlOptions.TOP,
              },
            }}
            />
            {
              markers.map((marker) => (
                <Placemark
                  key={marker.city}
                  geometry={marker.location}
                  options={PlacemarkOption}
                />
              ))
            }
          </Map>
        </YMaps>
      </div>
    </section>
  );
}

export default YandexMap;
