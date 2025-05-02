import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo_company.svg';
import logo_name from '../../assets/images/company_name.svg'
import { BiSolidPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import styles from './Header.module.css';

const BurgerMenuIcon = ({ isOpen }) => (
  <div className={`${styles.burgerMenuIcon} ${isOpen ? styles.burgerMenuIcon_open : ''}`}>
    <span className={styles.burgerLine}></span>
    <span className={styles.burgerLine}></span>
    <span className={styles.burgerLine}></span>
  </div>
);

function Header({ scrollToSection }) {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language.split('-')[0] || 'ru');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setActiveLanguage(language);
    i18n.changeLanguage(language);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <div className={styles.logo} onClick={() => scrollToSection('hero')}>
            <img src={logo} alt="Arbitrum Logo" className={styles.logoImage} />
            <img src={logo_name} alt="Logo Name" className={styles.logoText}/>
            {/* <span className={styles.logoText}>{t('header.logo')}</span> */}
          </div>

          <div className={styles.verticalLines}>
            <div className={styles.verticalLine} style={{ "--line-width": "3.6px" }}></div>
            <div className={styles.verticalLine} style={{ "--line-width": "3.1px" }}></div>
            <div className={styles.verticalLine} style={{ "--line-width": "2.1px" }}></div>
            <div className={styles.verticalLine} style={{ "--line-width": "1.4px" }}></div>
            <div className={styles.verticalLine} style={{ "--line-width": "0.7px" }}></div>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <span
                  className={styles.navLink}
                  onClick={() => handleNavClick('about')}
                >
                  {t('header.about')}
                </span>
              </li>
              <li>
                <span
                  className={styles.navLink}
                  onClick={() => handleNavClick('services')}
                >
                  {t('header.services')}
                </span>
              </li>
              <li>
                <span
                  className={styles.navLink}
                  onClick={() => handleNavClick('contacts')}
                >
                  {t('header.contacts')}
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.header_right}>
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <BiSolidPhone className={styles.icon} />
              <a href="tel:+70711818670" className={`${styles.contactLink} ${styles.contactIconOnly}`}>
                {t('header.phone')}
              </a>
            </div>

            <div className={styles.line}></div>
            
            <div className={styles.contactItem}>
              <MdEmail className={styles.icon} />
              <a href="mailto:nikita@arbitrum.com" className={`${styles.contactLink} ${styles.contactIconOnly}`}>
                {t('header.email')}
              </a>
            </div>
          </div>

          <div className={styles.language}>
            <span
              className={`${styles.languageOption} ${activeLanguage === 'ru' ? styles.languageOption_active : ''}`}
              onClick={() => handleLanguageChange('ru')}
            >
              RU
            </span>
            <span
              className={`${styles.languageOption} ${activeLanguage === 'en' ? styles.languageOption_active : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              ENG
            </span>
          </div>

          <div className={styles.burgerMenu} onClick={toggleMenu}>
            <BurgerMenuIcon isOpen={isMenuOpen} />
          </div>
        </div>
      </div>

      <div className={`${styles.sidebar} ${isMenuOpen ? styles.sidebar_open : ''}`}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarContentContainer}>
            <div className={styles.sidebarLanguage}>
              <span
                className={`${styles.sidebarLanguageOption} ${activeLanguage === 'ru' ? styles.sidebarLanguageOption_active : ''}`}
                onClick={() => handleLanguageChange('ru')}
              >
                RU
              </span>
              <span
                className={`${styles.sidebarLanguageOption} ${activeLanguage === 'en' ? styles.sidebarLanguageOption_active : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                ENG
              </span>
            </div>

            <nav className={styles.sidebarNav}>
              <ul className={styles.sidebarNavList}>
                <li>
                  <span
                    className={styles.sidebarNavLink}
                    onClick={() => handleNavClick('about')}
                  >
                    {t('header.about')}
                  </span>
                </li>
                <li>
                  <span
                    className={styles.sidebarNavLink}
                    onClick={() => handleNavClick('services')}
                  >
                    {t('header.services')}
                  </span>
                </li>
                <li>
                  <span
                    className={styles.sidebarNavLink}
                    onClick={() => handleNavClick('contacts')}
                  >
                    {t('header.contacts')}
                  </span>
                </li>
              </ul>
            </nav>

            <div className={styles.sidebarContacts}>
              <div className={styles.sidebarContactItem}>
                <BiSolidPhone className={styles.sidebarIcon} />
                <a href="tel:+70711818670" className={styles.sidebarContactLink}>{t('header.phone')}</a>
              </div>
              <div className={styles.sidebarContactItem}>
                <MdEmail className={styles.sidebarIcon} />
                <a href="mailto:nikita@arbitrum.com" className={styles.sidebarContactLink}>{t('header.email')}</a>
              </div>
            </div>
          </div>

          <button
            className={styles.sidebarButton}
            onClick={() => handleNavClick('calculateCost')}
          >
            {t('header.requestQuote')}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;