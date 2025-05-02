import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './CalculateCost.module.css';

function CalculateCost({ onShowPrivacyPolicy }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    cargoType: '',
    weight: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
    consent: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    // Поле from (Откуда)
    if (!formData.from.trim()) {
      errors.from = t('calculateCost.errorFrom') || 'Enter the departure point';
    } else if (formData.from.length < 2) {
      errors.from = t('calculateCost.errorFromLength') || 'Departure point must be at least 2 characters';
    } else if (!/^[a-zA-Zа-яА-Я\s-]+$/.test(formData.from)) {
      errors.from = t('calculateCost.errorFromInvalid') || 'Departure point can only contain letters, spaces, and hyphens';
    }

    // Поле to (Куда)
    if (!formData.to.trim()) {
      errors.to = t('calculateCost.errorTo') || 'Enter the destination point';
    } else if (formData.to.length < 2) {
      errors.to = t('calculateCost.errorToLength') || 'Destination point must be at least 2 characters';
    } else if (!/^[a-zA-Zа-яА-Я\s-]+$/.test(formData.to)) {
      errors.to = t('calculateCost.errorToInvalid') || 'Destination point can only contain letters, spaces, and hyphens';
    }

    // Поле cargoType (Тип груза)
    if (!formData.cargoType.trim()) {
      errors.cargoType = t('calculateCost.errorCargoType') || 'Enter the cargo type';
    } else if (formData.cargoType.length < 2) {
      errors.cargoType = t('calculateCost.errorCargoTypeLength') || 'Cargo type must be at least 2 characters';
    } else if (!/^[a-zA-Zа-яА-Я\s-]+$/.test(formData.cargoType)) {
      errors.cargoType = t('calculateCost.errorCargoTypeInvalid') || 'Cargo type can only contain letters, spaces, and hyphens';
    }

    // Поле weight (Вес)
    if (!formData.weight.trim()) {
      errors.weight = t('calculateCost.errorWeightRequired') || 'Enter the cargo weight';
    } else if (isNaN(Number(formData.weight)) || Number(formData.weight) <= 0) {
      errors.weight = t('calculateCost.errorWeightInvalid') || 'Weight must be a positive number';
    } else if (!/^\d+(\.\d{1,3})?$/.test(formData.weight)) {
      errors.weight = t('calculateCost.errorWeightDecimals') || 'Weight can have up to 3 decimal places';
    }

    // Поле name (Имя)
    if (!formData.name.trim()) {
      errors.name = t('calculateCost.errorName') || 'Enter your name';
    } else if (formData.name.length < 2) {
      errors.name = t('calculateCost.errorNameLength') || 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Zа-яА-Я\s-]+$/.test(formData.name)) {
      errors.name = t('calculateCost.errorNameInvalid') || 'Name can only contain letters, spaces, and hyphens';
    }

    // Поле company (Компания)
    if (!formData.company.trim()) {
      errors.company = t('calculateCost.errorCompany') || 'Enter the company name';
    } else if (formData.company.length < 2) {
      errors.company = t('calculateCost.errorCompanyLength') || 'Company name must be at least 2 characters';
    } else if (!/^[a-zA-Zа-яА-Я0-9\s-.]+$/.test(formData.company)) {
      errors.company = t('calculateCost.errorCompanyInvalid') || 'Company name can only contain letters, numbers, spaces, hyphens, and dots';
    }

    // Поле email (Email)
    if (!formData.email.trim()) {
      errors.email = t('calculateCost.errorEmailRequired') || 'Enter your email';
    } else if (formData.email.length > 100) {
      errors.email = t('calculateCost.errorEmailLength') || 'Email cannot exceed 100 characters';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = t('calculateCost.errorEmailInvalid') || 'Invalid email format';
    }

    // Поле phone (Телефон)
    if (!formData.phone.trim()) {
      errors.phone = t('calculateCost.errorPhoneRequired') || 'Enter your phone number';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      errors.phone = t('calculateCost.errorPhoneInvalid') || 'Invalid phone number format (e.g., +1 (202) 555-0182)';
    }

    // Поле notes (Примечания)
    if (formData.notes.length > 500) {
      errors.notes = t('calculateCost.errorNotesLength') || 'Notes cannot exceed 500 characters';
    } else if (formData.notes && !/^[a-zA-Zа-яА-Я0-9\s.,!?-]+$/.test(formData.notes)) {
      errors.notes = t('calculateCost.errorNotesInvalid') || 'Notes can only contain letters, numbers, spaces, and basic punctuation';
    }

    // Поле consent (Чекбокс)
    if (!formData.consent) {
      errors.consent = t('calculateCost.consentRequired') || 'You must agree to the privacy policy';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; 
    }

    emailjs
      .send(
        'service_wzxg769', // Замени на твой Service ID
        'template_f3pgoxo', // Замени на твой Template ID
        {
          from: formData.from,
          to: formData.to,
          cargoType: formData.cargoType,
          weight: formData.weight,
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes,
          from_name: formData.name,
        },
        'Arpr1mnGJvg159k9t' // Замени на твой User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Form submitted successfully! Check your email.');
          setFormData({
            from: '',
            to: '',
            cargoType: '',
            weight: '',
            name: '',
            company: '',
            email: '',
            phone: '',
            notes: '',
            consent: false,
          });
          setFormErrors({});
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send the form. Please try again.');
        }
      );
  };

  return (
    <section id='calculateCost' className={styles.calculateCost}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t('calculateCost.title')}</h2>

        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <label>{t('calculateCost.from')}</label>
              <input
                type="text"
                name="from"
                placeholder={t('calculateCost.fromPlaceholder')}
                value={formData.from}
                onChange={handleChange}
                className={formErrors.from ? styles.errorInput : ''}
              />
              {formErrors.from && <p className={styles.errorText}>{formErrors.from}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.to')}</label>
              <input
                type="text"
                name="to"
                placeholder={t('calculateCost.toPlaceholder')}
                value={formData.to}
                onChange={handleChange}
                className={formErrors.to ? styles.errorInput : ''}
              />
              {formErrors.to && <p className={styles.errorText}>{formErrors.to}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.cargoType')}</label>
              <input
                type="text"
                name="cargoType"
                placeholder={t('calculateCost.cargoTypePlaceholder')}
                value={formData.cargoType}
                onChange={handleChange}
                className={formErrors.cargoType ? styles.errorInput : ''}
              />
              {formErrors.cargoType && <p className={styles.errorText}>{formErrors.cargoType}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.weight')}</label>
              <input
                type="text"
                name="weight"
                placeholder={t('calculateCost.weightPlaceholder')}
                value={formData.weight}
                onChange={handleChange}
                className={formErrors.weight ? styles.errorInput : ''}
              />
              {formErrors.weight && <p className={styles.errorText}>{formErrors.weight}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.name')}</label>
              <input
                type="text"
                name="name"
                placeholder={t('calculateCost.namePlaceholder')}
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? styles.errorInput : ''}
              />
              {formErrors.name && <p className={styles.errorText}>{formErrors.name}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.company')}</label>
              <input
                type="text"
                name="company"
                placeholder={t('calculateCost.companyPlaceholder')}
                value={formData.company}
                onChange={handleChange}
                className={formErrors.company ? styles.errorInput : ''}
              />
              {formErrors.company && <p className={styles.errorText}>{formErrors.company}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.email')}</label>
              <input
                type="email"
                name="email"
                placeholder={t('calculateCost.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? styles.errorInput : ''}
              />
              {formErrors.email && <p className={styles.errorText}>{formErrors.email}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.phone')}</label>
              <input
                type="tel"
                name="phone"
                placeholder={t('calculateCost.phonePlaceholder')}
                value={formData.phone}
                onChange={handleChange}
                className={formErrors.phone ? styles.errorInput : ''}
              />
              {formErrors.phone && <p className={styles.errorText}>{formErrors.phone}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label>{t('calculateCost.notes')}</label>
              <input
                type='text'
                name="notes"
                placeholder={t('calculateCost.notesPlaceholder')}
                value={formData.notes}
                onChange={handleChange}
                className={formErrors.notes ? styles.errorInput : ''}
              />
              {formErrors.notes && <p className={styles.errorText}>{formErrors.notes}</p>}
            </div>

            <div className={styles.checkboxGroup}>
              <div className={styles.checkboxGroupContainer}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={formErrors.consent ? styles.errorInput : ''}
                />
                <label>
                  {t('calculateCost.consent').split(':')[0]}{' '}
                  <a href="#" onClick={(e) => { e.preventDefault(); onShowPrivacyPolicy(); }}>
                    {t('calculateCost.consent').split(':')[1]}
                  </a>
                </label>
              </div>
              {formErrors.consent && <p className={styles.errorText}>{formErrors.consent}</p>}
            </div>

            <button className={styles.submitButton} onClick={handleSubmit}>
              {t('calculateCost.submit')}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sidebar}>
        <span className={styles.sidebarText}>ARBITRUM</span>
        <div className={styles.sidebarLines}>
          <div className={styles.line} style={{ "--line-width": "3.6px" }}></div>
          <div className={styles.line} style={{ "--line-width": "3.1px" }}></div>
          <div className={styles.line} style={{ "--line-width": "2.1px" }}></div>
          <div className={styles.line} style={{ "--line-width": "1.4px" }}></div>
          <div className={styles.line} style={{ "--line-width": "0.7px" }}></div>
        </div>
      </div>
    </section>
  );
}

export default CalculateCost;