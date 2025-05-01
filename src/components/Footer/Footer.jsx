import { useTranslation } from 'react-i18next';
import { BiSolidPhone } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaTelegram } from "react-icons/fa6";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import logo from '../../assets/images/logo_company.svg';
import styles from './Footer.module.css';

function Footer({ scrollToSection }) {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>{t('footer.services.title')}</h3>
          <ul className={styles.list}>
            <li>{t('footer.services.item1')}</li>
            <li>{t('footer.services.item2')}</li>
            <li>{t('footer.services.item3')}</li>
            <li>{t('footer.services.item4')}</li>
            <li>{t('footer.services.item5')}</li>
            <li>{t('footer.services.item6')}</li>
            <li>{t('footer.services.item7')}</li>
            <li>{t('footer.services.item8')}</li>
            <li>{t('footer.services.item9')}</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>{t('footer.contacts.title')}</h3>
          <div className={styles.contactItem}>
            <h4 className={styles.contactLabel}>{t('footer.contacts.phoneLabel')}</h4>
            <h3 className={styles.contactPhone}>
              <BiSolidPhone className={styles.icon} /> {t('footer.contacts.phone')}
            </h3>
            <p>{t('footer.contacts.phone1Label')}</p>
          </div>

          <div className={styles.contactItem}>
            <h4 className={styles.contactLabel}>{t('footer.contacts.emailLabel')}</h4>
            <h3 className={styles.contactText}>
              <MdEmail className={styles.icon} /> {t('footer.contacts.email')}
            </h3>
          </div>

          <div className={styles.contactItem}>
            <h4 className={styles.contactLabel}>{t('footer.contacts.whatsappLabel')}</h4>
            <h3 className={styles.contactWhatsapp}>
              <TbBrandWhatsappFilled className={styles.icon} /> {t('footer.contacts.whatsapp')}
            </h3>
          </div>

          <div className={styles.contactItem}>
            <h4 className={styles.contactLabel}>{t('footer.contacts.telegramLabel')}</h4>
            <h3 className={styles.contactTelegram}>
              <FaTelegram className={styles.icon} /> {t('footer.contacts.telegram')}
            </h3>
          </div>

          <div className={`${styles.contactItem} ${styles.marker_item}`}>
            <h4 className={styles.contactLabel}>{t('footer.contacts.addressLabel')}</h4>
            <h3 className={styles.contactText}>
              <FaMapMarkerAlt className={styles.icon} /> {t('footer.contacts.address')}
            </h3>
          </div>
        </div>

        <div className={`${styles.column} ${styles.logoColumn}`} onClick={() => scrollToSection('hero')}>
          <div className={styles.logo}>
            <img src={logo} alt="Arbitrum Logo" className={styles.logoImage} />
            <span className={styles.logoText}>{t('footer.logo')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;