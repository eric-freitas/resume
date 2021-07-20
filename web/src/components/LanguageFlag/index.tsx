import React  from 'react';

import { useTranslation } from 'react-i18next';

export interface LanguageProps {
    code : string,
    name : string 
}

const LanguageFlag:React.FC<LanguageProps> = (props) => {
    
    const { code, name } = props;

    //eslint-disable-next-line
    const [ t, i18n ] = useTranslation();

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <span className="lang-flag" onClick={() => changeLanguage(code)} title={name}>
            {props.children}
        </span>
    
    )
}

export default LanguageFlag;