import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import videoMp4 from '../../assets/videos/hero-background-compressed.mp4';
import videoWebM from '../../assets/videos/hero-background.webm';
import video_img from '../../assets/images/hero-background.avif';
import styles from './Hero.module.css';

function Hero({ scrollToSection }) {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const video = videoRef.current;
          const sources = video.querySelectorAll('source');
          sources.forEach((source) => {
            source.src = source.dataset.src;
          });
          video.load();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        poster={video_img}
        autoPlay
        muted
        loop
        playsInline
      >
        <source data-src={videoWebM} type="video/webm" />
        <source data-src={videoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {t('hero.title').split('—')[0]} <span className={styles.dash}>—</span> {t('hero.title').split('—')[1]}
        </h1>
        <button className={styles.heroButton} onClick={() => scrollToSection("calculateCost")}>
          {t('hero.button')}
        </button>
      </div>
    </section>
  );
}

export default Hero;