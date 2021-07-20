import React  from 'react';
/*import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import IconComponent from '../IconComponent';*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons'

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas)

export interface ContactInfoItemProps {
    text    : string,
    hint?   : string,
    //icon    : IconDefinition,
    icon    : IconName,
    iconLib : IconPrefix,
    linkTo? : string
}


const ContactInfoItem:React.FC<ContactInfoItemProps> = (props) => {
    
    const {text, hint, icon, linkTo, iconLib} = props;


    const content = [
        (<span key="text">{text}</span>),
        <FontAwesomeIcon key="icon" icon={[iconLib, icon]} /> 
    ]

    return (
        <div className="contact-info-item" title={hint}>
            {(linkTo && (<a target="_blank" rel="noreferrer"  href={linkTo}>{content}</a>)) || content}
        </div>
    )
}

export default ContactInfoItem;