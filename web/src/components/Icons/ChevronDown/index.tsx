import React from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import IconComponent, { IconProps } from '../../IconComponent';

const IconChevronDown:React.FC<IconProps> = (props) => {
    return (
        <IconComponent icon={faChevronDown} onClick={props.onClick} />
    );
}

export default IconChevronDown;
