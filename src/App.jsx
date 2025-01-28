import { useState } from 'react';
import { LanguageProvider } from './localization/LanguageContext';
import { ThemeProvider } from './theme/ThemeContext';
import { useLanguage } from './localization/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const AppContent = () => {
  const [count, setCount] = useState(0);
  const { t } = useLanguage();

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <h1>{t('title')}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {t('countText')} {count}
          </button>
          <p>
            {t('editText')} <code>src/App.jsx</code> {t('andSaveText')}
          </p>
        </div>
        <p className="read-the-docs">
          {t('learnMoreText')}
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
