import React from 'react';
import { ApiExecStatus } from '../../models/ApiExec';
import IconLoading from '../Icons/Loading';

import './index.scss';

interface ApiStatusProps {
    status : ApiExecStatus
}


const ApiStatus: React.FC<ApiStatusProps> = (props) => {
    switch (props.status) {
        case ApiExecStatus.Error:
        case ApiExecStatus.Ok:
            return null;
        case ApiExecStatus.Init:
        case ApiExecStatus.Loading:
            return (<span className="api-status"><IconLoading/></span>)
        default:
            return null;
    }
}
  
export default ApiStatus;

