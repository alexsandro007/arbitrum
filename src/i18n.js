import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем переводы из JSON-файлов
import translationRU from './locales/ru/translation.json';
import translationEN from './locales/en/translation.json';

// Определяем ресурсы для i18next
const resources = {
  ru: {
    translation: translationRU,
  },
  en: {
    translation: translationEN,
  },
};

i18next
  .use(LanguageDetector) // Автоматическое определение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    resources, // Используем импортированные переводы
    fallbackLng: 'ru', // Язык по умолчанию — русский
    detection: {
      order: ['localStorage', 'navigator'], // Сначала проверяем localStorage, затем язык браузера
      caches: ['localStorage'], // Сохраняем выбор языка в localStorage
    },
    interpolation: {
      escapeValue: false, // React сам экранирует значения
    },
  });

export default i18next;