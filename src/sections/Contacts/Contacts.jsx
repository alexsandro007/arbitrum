import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import styles from './Contacts.module.css';

function Contacts({ scrollToSection }) {
  const { t } = useTranslation();

  const handleMapButtonClick = () => {
    const address = encodeURIComponent("Республика Беларусь, город Минск, ул. Машиностроителей 26, офис 6");
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.5614078849617!2d27.658683477011824!3d53.85066433686935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd20c9d4a9905%3A0x4dc55abd4c406879!2z0YPQuy4g0JzQsNGI0LjQvdC-0YHRgtGA0L7QuNGC0LXQu9C10LkgMjYsINCc0LjQvdGB0LosINCc0LjQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMIDIyMDA3NSwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2spl!4v1745758936078!5m2!1sru!2spl"
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        <div className={styles.info}>
          <h2 className={styles.sectionTitle}>{t('contacts.title')}</h2>

          <div className={styles.contactItems}>
            <div className={styles.contactItemsMesangerData}>
              <div className={styles.contactItem}>
                <h4 className={styles.contactLabel}>{t('contacts.phoneLabel')}</h4>
                <h3 className={styles.contactPhone}>
                  <BiSolidPhone className={styles.icon} /> {t('contacts.phone1')}
                </h3>
                <p>{t('contacts.phone1Label')}</p>
              </div>

              <div className={styles.contactItem}>
                <h4 className={styles.contactLabel}>{t('contacts.emailLabel')}</h4>
                <h3>
                  <MdEmail className={styles.icon} /> {t('contacts.email')}
                </h3>
              </div>

              <div className={styles.contactItem}>
                <h4 className={styles.contactLabel}>{t('contacts.whatsappLabel')}</h4>
                <h3 className={styles.contactWhatsapp}>
                  <TbBrandWhatsappFilled className={styles.icon} /> {t('contacts.whatsapp')}
                </h3>
              </div>

              <div className={styles.contactItem}>
                <h4 className={styles.contactLabel}>{t('contacts.telegramLabel')}</h4>
                <h3 className={styles.contactTelegram}>
                  <FaTelegram className={styles.icon} /> {t('contacts.telegram')}
                </h3>
              </div>
            </div>

            <div className={styles.contactItemsAddress}>
              <div className={styles.contactItem}>
                <h4 className={styles.contactLabel}>{t('contacts.hoursLabel')}</h4>
                <h3>{t('contacts.hours')}</h3>
              </div>

              <div className={styles.contactItem}>
                <h4 className={styles.contactLabel}>{t('contacts.addressLabel')}</h4>
                <h3 className={styles.contactAddress}>
                  <FaMapMarkerAlt className={styles.icon} /> {t('contacts.address').split(":")[0]} <br/> {t('contacts.address').split(":")[1]}
                </h3>
              </div>

              <button className={styles.buttonMapDesktop} onClick={() => scrollToSection("calculateCost")}>
                {t('contacts.button')}
              </button>

              <div className={styles.buttonContainer}>
                <button className={styles.buttonMapMobile} onClick={handleMapButtonClick}>
                  <FaMapMarkerAlt className={styles.iconMapMobile} /> {t('contacts.buttonMapMobile')}
                </button>
                
                <button className={styles.buttonRequest} onClick={() => scrollToSection("calculateCost")}>
                  {t('contacts.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;