import React from 'react';

import { faAtom } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../IconComponent';

const IconLoading = () => {
    return (
        <Icon icon={faAtom} className="fa-spin"  />
    );
}

export default IconLoading;
