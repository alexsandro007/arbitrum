import { useTranslation } from 'react-i18next';
import truckImage from '../../assets/images/truck.avif';
import company_name from '../../assets/images/about_company_name.svg'
import styles from './About.module.css';

function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('about.title')}</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={truckImage} alt="Arbitrum Truck" className={styles.truckImage} />
          </div>

          <div className={styles.textWrapper}>
            <div className={styles.companyInfo}>
               {/* <h3 className={styles.companyName}>{t('about.companyName')}</h3> */}
               <img src={company_name} alt="" className={styles.companyName}/>

               <p className={styles.description}>{t('about.description').split('</br>')[0]} <br/> <br/> {t('about.description').split('</br>')[1]}</p>
            </div>

            <p className={styles.mission}>
              <span className={styles.missionTitle}>{t('about.missionTitle')}</span> <br/> {t('about.mission')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;