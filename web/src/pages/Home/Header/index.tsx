import React  from 'react';
import ContactInfoItem from '../../../components/ContactInfoItem';
import ContactInfo from '../ContactInfo';

import { useTranslation } from 'react-i18next';

import './header.scss';
import BrasilFlag from '../../../components/Icons/Flags/Brasil/index';
import LanguageFlag from '../../../components/LanguageFlag';
import UsaFlag from '../../../components/Icons/Flags/Usa/index';
import EspanaFlag from '../../../components/Icons/Flags/Espana';

const Header = () => {

    
    const { t } = useTranslation();

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
                    <ContactInfoItem 
                        key     = "linkedin"
                        icon    = "linkedin" 
                        iconLib = "fab"
                        text    = "linkedin.com/in/eric-freitas-matos" 
                        linkTo  = "https://www.linkedin.com/in/eric-freitas-matos/" 
                        hint    = "LinkedIn"
                    />

                    <ContactInfoItem 
                        key     = "local"
                        iconLib = "fas"
                        icon    = "map-marker-alt" 
                        text    = "Guarulhos - SP, Brasil" 
                        linkTo  = "https://www.google.com.br/maps/place/Guarulhos+-+SP" 
                        hint    = "Localização"
                    />
                    
                    <ContactInfoItem 
                        key     = "facebook"
                        iconLib = "fab"
                        icon    = "facebook" 
                        text    = "facebook.com/ericfmatos" 
                        linkTo  = "https://www.facebook.com/ericfmatos" 
                        hint    = "Facebook"
                    />
    
                    <ContactInfoItem 
                        key     = "instagram"
                        iconLib = "fab"
                        icon    = "instagram" 
                        text    = "@eric_freitas_matos" 
                        linkTo  = "https://www.instagram.com/eric_freitas_matos/" 
                        hint    = "Instagram"
                    />

                    <ContactInfoItem 
                        key     = "github"
                        iconLib = "fab"
                        icon    = "github"
                        text    = "eric-freitas" 
                        linkTo  = "https://github.com/eric-freitas" 
                        hint    = "GitHub"
                    />

                </ContactInfo>
                
            </div>
            
        </header>
    )
}

export default Header;