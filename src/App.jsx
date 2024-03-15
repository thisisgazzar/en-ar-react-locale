import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

const locales = {
  en: { title: 'English' },
  ar: { title: 'العربية' },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <Suspense fallback="loading...">
      <>
        <ul>
          {Object.keys(locales).map((locale) => (
            <li key={locale}><button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
              {locales[locale].title}
            </button></li>
          ))}
        </ul>
        <h2>{t('main.header')}</h2>
      </>
    </Suspense>
  )
}

export default App
