import './App.css';
import MyForm from './components/MyForm';
import { IntlProvider } from 'react-intl'
import ua from './localization/ua.json'
import en from './localization/en.json'
import { useState } from 'react';

function App() {
const local =navigator.language
const [language, setLanguage]= useState(true)
  return (

    <div className="App">
      <button className='language-switch' onClick={()=>setLanguage(!language)}>{language?'EN':'UA'}</button>
      <IntlProvider locale={local} messages={language?ua:en} >
        <MyForm />
      </IntlProvider>
    </div>
  );
}

export default App;
