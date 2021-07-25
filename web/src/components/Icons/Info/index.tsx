import React from 'react';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import IconComponent, { IconProps } from '../../IconComponent';

const IconInfo: React.FC<IconProps> = (props) => {
    return (
        <IconComponent {...props} icon={faInfoCircle}  />
    );
}

export default IconInfo;
