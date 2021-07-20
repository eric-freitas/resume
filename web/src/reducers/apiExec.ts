import { ApiExecActionTypes, SET_ERROR, SET_STATUS } from '../actions/apiExec';
import { ApiExecStatus } from '../models/ApiExec';

const apiExec = (state = {}, action: ApiExecActionTypes) => {
    switch(action.type){
        case SET_ERROR:
            return {
                ...state,
                error  : action.payload,
                status : ApiExecStatus.Error
            }
        case SET_STATUS:
                return {
                    ...state,
                    status : action.payload
                }
        default:
            return state
    }
}

export default apiExec;