import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.css';

function Advantages() {
  const { t } = useTranslation();

  const advantagesItems = t('advantages.items', { returnObjects: true });

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('advantages.title')}</h2>

        <div className={styles.items}>
          {advantagesItems.map((item, index) => (
            <div key={index} className={styles.item}>
               <div className={styles.verticalLines}>
                    <div className={styles.verticalLine} style={{ "--line-width": "3.6px" }}></div>
                    <div className={styles.verticalLine} style={{ "--line-width": "3.1px" }}></div>
                    <div className={styles.verticalLine} style={{ "--line-width": "2.1px" }}></div>
                    <div className={styles.verticalLine} style={{ "--line-width": "1.4px" }}></div>
                    <div className={styles.verticalLine} style={{ "--line-width": "0.7px" }}></div>
               </div>

               <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>

                    <p className={styles.itemDescription}>{item.description}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;