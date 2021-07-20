import React, { useEffect, useState }  from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { ContactInfoData } from '../../../models/ContactInfo';
import contactInfoService from '../../../services/contactInfo';

import ContactInfoItem from '../../../components/ContactInfoItem';
import ContactInfo from '../ContactInfo';

import BrasilFlag from '../../../components/Icons/Flags/Brasil/index';
import LanguageFlag from '../../../components/LanguageFlag';
import UsaFlag from '../../../components/Icons/Flags/Usa/index';
import EspanaFlag from '../../../components/Icons/Flags/Espana';

import './header.scss';


const Header = () => {

    const dispatch = useDispatch();
    const [ t, i18n ] = useTranslation();
    const language = i18n.language;

    const [ contactInfo, setContactInfo ] = useState<ContactInfoData[]>([]);

    useEffect(() => {
        contactInfoService()
             .listMyContactInfo(language, dispatch)
             .then((e:any) => {
                  const newContactInfo:ContactInfoData[] = e?.data;
                  if (newContactInfo) {
                    setContactInfo(newContactInfo);
                  }
              })
    }, [language, dispatch])


    const itens = (
        contactInfo && 
        contactInfo.map(_ci => {
            const { icon, text, hint, linkTo } = _ci;
            const { lib, name } = icon;
            return (<ContactInfoItem 
                        key     = {hint}
                        icon    = {name}
                        iconLib = {lib}
                        text    = {text}
                        linkTo  = {linkTo}
                        hint    = {hint}
                    />)
        })
    ) || null;

    return (
        <header id="header">    

            <div className="header__title">
                <h1>Eric de Freitas Matos</h1>
                <h2>{t("main.position")}</h2>
            </div>

            <div className="header__content">
                <div className="languages">
                    <LanguageFlag key="pt" code="pt" name="Português">
                        <BrasilFlag />    
                    </LanguageFlag>

                    <LanguageFlag key="en" code="en" name="English">
                        <UsaFlag />    
                    </LanguageFlag>

                    <LanguageFlag key="es" code="es" name="Español">
                        <EspanaFlag />    
                    </LanguageFlag>
                   
                </div>
                <ContactInfo>
                    {itens}
                </ContactInfo>
                
            </div>
            
        </header>
    )
}

export default Header;