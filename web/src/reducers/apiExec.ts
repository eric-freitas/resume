import { ApiExecActionTypes, SET_STATUS } from '../actions/apiExec';
import { ApiExecStatus } from '../models/ApiExec';
import { AppDataState } from '../models/AppState';


const initialState: AppDataState = {
    apiStatus: []
}

const apiExec = (state:AppDataState = initialState, action: ApiExecActionTypes):AppDataState => {
    switch(action.type){
        case SET_STATUS:

            let curApis = state.apiStatus.filter(e => e.api !== action.payload.api);
            if (action.payload.status !== ApiExecStatus.Idle && action.payload.status !== ApiExecStatus.Ok) {
                curApis.push(action.payload);
            }

            return {
                ...state,
                apiStatus : curApis
            }
        default:
            return state
    }
} 

export default apiExec;