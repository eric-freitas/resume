import React from 'react';
import { useSelector } from 'react-redux';
import { ApiExecStatus } from '../../models/ApiExec';
import { AppDataState } from '../../models/AppState';
import errorMsgHandler from '../../static/errorMsgHandler';
import ErrorMessage from '../ErrorMessage';

const ApiErrorMsg = () => {

    const { httpStatusToTitle } = errorMsgHandler();
        
    const apiStatus   = useSelector((state:AppDataState) => state.apiExec)
    
    let errorMessage = null;
    if (apiStatus?.status === ApiExecStatus.Error && apiStatus?.error?.response ) {

        if (apiStatus?.error?.response?.status !== 406) {

            const errorMsgDefinition = httpStatusToTitle(apiStatus?.error?.response?.status || 0);
            const errorMsgText = apiStatus?.error?.response?.data?.err || apiStatus?.error?.response?.data?.msg || apiStatus?.error?.response?.data?.error;
            
            errorMessage = (<ErrorMessage title={errorMsgDefinition.title} icon={errorMsgDefinition.icon} message={(errorMsgText?.toString() || "")} />)
        }
    }

   return errorMessage;

}
  
export default ApiErrorMsg;

