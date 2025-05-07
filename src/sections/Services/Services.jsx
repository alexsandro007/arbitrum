import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import styles from './Services.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import service1 from '../../assets/images/services/service1.avif';
import service2 from '../../assets/images/services/service2.avif';
import service3 from '../../assets/images/services/service3.avif';
import service4 from '../../assets/images/services/service4.avif';
import service5 from '../../assets/images/services/service5.avif';
import service6 from '../../assets/images/services/service6.avif';
import service7 from '../../assets/images/services/service7.avif';
import service8 from '../../assets/images/services/service8.avif';
import service9 from '../../assets/images/services/service9.avif';

function Services({ scrollToSection }) {
  const { t } = useTranslation();

  const servicesItems = t('services.items', { returnObjects: true });

  const images = [service1, service2, service3, service4, service5, service6, service7, service8, service9];

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1023);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.sectionTitle}>{t('services.title')}</h2>

          <div className={styles.items}>
            {isMobileOrTablet ? (
              <Swiper
                className={styles.swiperLayout}
                slidesPerView={1.1}
                spaceBetween={10} 
                centeredSlides={true} 
                loop={true}
                grabCursor={true}
                lazy={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                  },
                }}
              >
                {servicesItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={styles.item}
                      style={{ backgroundImage: `url(${images[index]})` }}
                    >
                      <span className={styles.itemText}>{item}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className={styles.gridLayout}>
                {servicesItems.map((item, index) => (
                  <div
                    key={index}
                    className={styles.item}
                    style={{ backgroundImage: `url(${images[index]})` }}
                  >
                    <span className={styles.itemText}>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={() => scrollToSection("calculateCost")}>{t('services.button')}</button>
        </div>
      </div>
    </section>
  );
}

export default Services;