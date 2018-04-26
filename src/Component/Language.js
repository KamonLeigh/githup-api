import React from 'react';
import './Language.css' ;


const Language = ({ handleLangChange }) => {
  const language = ["all", "javascript", "ruby", "python"];
  return (
    <ul className="language">
      {language.map(lang => (
        <li key={lang} onClick={() => handleLangChange(lang)}>
          {lang}
        </li>
      ))}
    </ul>
  );
};

export default Language