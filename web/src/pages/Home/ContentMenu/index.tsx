import React, { useState }  from 'react';
import { useTranslation } from 'react-i18next';
import ContentMenuItem from '../../../components/ContentMenuItem';

import './content-menu.scss';

export interface ContentMenuProps {
    onSelected : (item: string) => void;
}

const ContentMenu:React.FC<ContentMenuProps> = (props) => {

    const { onSelected } = props;

    const { t }  = useTranslation();

    const [ selected, setSelected ] = useState<String>("skills");

    const setMenuSelected = (item: string) => {
        if (selected !== item) {
            setSelected(item);
            onSelected(item);
        }
    }


    return (
       <section className="content-menu">
           <ul>
                <ContentMenuItem 
                    text        = {t('menu.skills')}     
                    onClick     = {() => setMenuSelected("skills")}        
                    selected    = {selected === "skills"}
                />
                <ContentMenuItem 
                    text        = {t('menu.experience')} 
                    onClick     = {() => setMenuSelected("experience")} 
                    selected    = {selected === "experience"}
                />
           </ul>
       </section>
    )
}

export default ContentMenu;
