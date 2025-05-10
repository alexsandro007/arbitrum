import { useTranslation } from 'react-i18next';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy({ onBack }) {
  const { t } = useTranslation();

  const renderTextWithLinks = (text, key) => {
    const parts = text.split(/(www\.arb1trum\.com|arb1trum@arb1trum\.com)/g);
  
    return parts.map((part, index) => {
      if (part === 'www.arb1trum.com') {
        return (
          <a
            key={`${key}-link-${index}`}
            href="https://www.arb1trum.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {part}
          </a>
        );
      }
  
      if (part === 'arb1trum@arb1trum.com') {
        return (
          <a
            key={`${key}-link-${index}`}
            href="mailto:arb1trum@arb1trum.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {part}
          </a>
        );
      }
      return <span key={`${key}-text-${index}`}>{part}</span>;
    });
  };

  return (
    <section className={styles.privacyPolicy}>
      <div className={styles.container}>
      <button className={styles.backButton} onClick={onBack}>
          <span className={styles.arrow}>←</span>
          <span className={styles.backText}>{t('privacyPolicy.backButton')}</span>
        </button>

        <h1 className={styles.title}>{t('privacyPolicy.title')}</h1>

        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>{renderTextWithLinks(t('privacyPolicy.section0.title'), 'section0-title')}</h2>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section1.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text1'), 'section1-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text2'), 'section1-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text3'), 'section1-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text4'), 'section1-text4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text5'), 'section1-text5')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text6'), 'section1-text6')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text7'), 'section1-text7')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section1.text8'), 'section1-text8')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section2.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section2.text1'), 'section2-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section2.text2'), 'section2-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section2.text3'), 'section2-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section2.text4'), 'section2-text4')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section3.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text1'), 'section3-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text2'), 'section3-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text3'), 'section3-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text4'), 'section3-text4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text5'), 'section3-text5')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text6'), 'section3-text6')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text6_1'), 'section3-text6_1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text6_2'), 'section3-text6_2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text6_3'), 'section3-text6_3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text6_4'), 'section3-text6_4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text6_5'), 'section3-text6_5')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text6_6'), 'section3-text6_6')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text7'), 'section3-text7')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text8'), 'section3-text8')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section3.text9'), 'section3-text9')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section4.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text1'), 'section4-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text2'), 'section4-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text3'), 'section4-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text4'), 'section4-text4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text5'), 'section4-text5')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text6'), 'section4-text6')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text7'), 'section4-text7')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text8'), 'section4-text8')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text9'), 'section4-text9')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text10'), 'section4-text10')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section4.text11'), 'section4-text11')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section5.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section5.text1'), 'section5-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section5.text2'), 'section5-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section5.text3'), 'section5-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section5.text4'), 'section5-text4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section5.text5'), 'section5-text5')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section5.text6'), 'section5-text6')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section6.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section6.text1'), 'section6-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section6.text2'), 'section6-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section6.text3'), 'section6-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section6.text4'), 'section6-text4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section6.text5'), 'section6-text5')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section6.text6'), 'section6-text6')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section7.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text1'), 'section7-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text2'), 'section7-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text3'), 'section7-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text4'), 'section7-text4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text5'), 'section7-text5')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text6'), 'section7-text6')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text7'), 'section7-text7')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section7.text8'), 'section7-text8')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section8.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section8.text1'), 'section8-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section8.text2'), 'section8-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section8.text3'), 'section8-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section8.text4'), 'section8-text4')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section8.text5'), 'section8-text5')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section9.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section9.text1'), 'section9-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section9.text2'), 'section9-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section9.text3'), 'section9-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section9.text4'), 'section9-text4')}</p>

          <h2 className={styles.sectionTitle}>{t('privacyPolicy.section10.title')}</h2>
          <p>{renderTextWithLinks(t('privacyPolicy.section10.text1'), 'section10-text1')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section10.text2'), 'section10-text2')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section10.text3'), 'section10-text3')}</p>
          <p>{renderTextWithLinks(t('privacyPolicy.section10.text4'), 'section10-text4')}</p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;