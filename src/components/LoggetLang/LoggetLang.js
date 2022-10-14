import React, { useEffect, useState } from 'react'
import i18 from '../../i18n'
function Loggedlang() {
  let [lang, setLang] = useState('');

  useEffect(() =>{
    switch(lang){
      case 'ru':
        i18.changeLanguage(lang)
      case 'uz':
        i18.changeLanguage(lang)
      case 'en':
        i18.changeLanguage(lang)
    }
  }, [lang])

  return (
    <select className='logged-talents__language' name="lang" id="lang" onChange={(e) => setLang(e.target.value)}> 
       <option className='logged-talents__language-text' value="en">En</option>
       <option className='logged-talents__language-text' value="uz">Uz</option>
       <option className='logged-talents__language-text' value="ru">Ru</option>
   </select>
  )
}

export default Loggedlang