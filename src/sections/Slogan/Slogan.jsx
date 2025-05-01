import { useTranslation } from 'react-i18next';
import styles from './Slogan.module.css';

function Slogan() {
  const { t } = useTranslation();

  return (
    <section className={styles.slogan}>
      <div className={styles.container}>
        <p className={styles.line1}>{t('slogan.line1')}</p>
        <p className={styles.line2}>{t('slogan.line2')}</p>
      </div>
    </section>
  );
}

export default Slogan;