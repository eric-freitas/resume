import React  from 'react';
import { useTranslation } from 'react-i18next';
import IconInfo from '../../../components/Icons/Info';
import { Modal } from 'react-bootstrap';


import './site-info.scss';
import { useState } from 'react';

const SiteInfo = () => {

    const { t } = useTranslation();

    const [ show, setShow ] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const linkToGithub  = (<a key="link" target="_blank" rel="noreferrer" href="https://github.com/eric-freitas/resume">{t('info.link')}</a>);
    const _link_regex = /(%link%)/i;

    const modalTextList: string[] = t('info.text', {returnObjects: true})
    const modalText = modalTextList.map((text, index) =>  
        (<p key={index}>
            {text
                .split(_link_regex)
                .map(text_child => {
                    if (text_child.match(_link_regex)) {
                        return linkToGithub;
                    } else {
                        return text_child;
                    }
                })
            }
        </p>)
    )

    return (
        <div className="site-info">
            <span>{t('info.title')}</span>
            <IconInfo onClick={handleShow}/>
            
            <Modal 
                show    = {show} 
                onHide  = {handleClose} 
                size    = "lg"
            >
                <Modal.Body>{modalText}</Modal.Body>
            </Modal>
        </div>

    )
}

export default SiteInfo;