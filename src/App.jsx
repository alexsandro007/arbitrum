import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Advantages from './sections/Advantages/Advantages';
import Services from './sections/Services/Services';
import Slogan from './sections/Slogan/Slogan';
import CalculateCost from './sections/CalculateCost/CalculateCost';
import Contacts from './sections/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './sections/PrivacyPolicy/PrivacyPolicy';
import styles from './App.module.css';

// Функция для прокрутки к секции
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const App = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handleShowPrivacyPolicy = () => {
    setShowPrivacyPolicy(true);
    // Прокручиваем к началу страницы
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setShowPrivacyPolicy(false);
    // Прокручиваем к блоку CalculateCost
    setTimeout(() => {
      scrollToSection('calculateCost');
    }, 0);
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div className={styles.contentWrapper}>
        {showPrivacyPolicy ? (
          <div className={`${styles.content} ${styles.fadeIn}`}>
            <PrivacyPolicy onBack={handleBackToMain} />
          </div>
        ) : (
          <main className={`${styles.content} ${styles.fadeIn}`}>
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Advantages />
            <Services scrollToSection={scrollToSection} />
            <Slogan />
            <CalculateCost onShowPrivacyPolicy={handleShowPrivacyPolicy} />
            <Contacts scrollToSection={scrollToSection} />
          </main>
        )}
      </div>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;