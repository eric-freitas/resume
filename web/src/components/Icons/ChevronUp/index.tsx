import React from 'react';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import IconComponent, { IconProps } from '../../IconComponent';

const IconChevronUp:React.FC<IconProps> = (props) => {
    return (
        <IconComponent icon={faChevronUp} onClick={props.onClick} />
    );
}

export default IconChevronUp;
