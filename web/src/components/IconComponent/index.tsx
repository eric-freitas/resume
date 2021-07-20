import React, { MouseEventHandler } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

export type IconProps = {
    icon?      : IconDefinition,
    className? : string,
    onClick?   : MouseEventHandler<SVGSVGElement>
}

const IconComponent: React.FC<IconProps> = (props) => {
    return (
        <FontAwesomeIcon onClick={props.onClick} icon={props.icon || faQuestionCircle} className={`icon ${props.className || ""}`} />
    );
}

export default IconComponent;
