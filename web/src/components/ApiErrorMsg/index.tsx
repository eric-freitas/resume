import React from 'react';
import { useSelector } from 'react-redux';
import { ApiExecStatus } from '../../models/ApiExec';
import { AppReducerData } from '../../reducers';
import errorMsgHandler from '../../static/errorMsgHandler';
import ErrorMessage from '../ErrorMessage';

const ApiErrorMsg = () => {

    const { httpStatusToTitle } = errorMsgHandler();
        
    const apiStatus   = useSelector((state:AppReducerData) => state.appStatus?.apiStatus)
    const errorMessage = apiStatus?.find(e => e.status === ApiExecStatus.Error && e.error && e.error.response);
    
    if (errorMessage && errorMessage.error.response?.status !== 406) {

        const errorMsgDefinition = httpStatusToTitle(errorMessage.error.response.status || 0);
        const errorMsgText = errorMessage.error.response.data?.err || errorMessage.error.response.data?.msg || errorMessage.error.response.data?.error;
        
        return (<ErrorMessage title={errorMsgDefinition.title} icon={errorMsgDefinition.icon} message={(errorMsgText?.toString() || "")} />)
    }

    return null;

}
  
export default ApiErrorMsg;

