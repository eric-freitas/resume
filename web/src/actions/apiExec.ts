import { ApiExecStatus } from "../models/ApiExec";

export const SET_ERROR  = "SET_ERROR";
export const SET_STATUS = "SET_STATUS";

interface SetErrorAction {
    type    : typeof SET_ERROR
    payload : any
}

interface SetStatusAction {
    type    : typeof SET_STATUS
    payload : ApiExecStatus
}


const setError = (data: any):SetErrorAction => {
    return {
        type    : SET_ERROR,
        payload : data
    }
}

const setStatus = (data:ApiExecStatus):SetStatusAction => {
    return {
        type    : SET_STATUS,
        payload : data
    }
}
 // eslint-disable-next-line
export default {
    setError,
    setStatus
}

export type ApiExecActionTypes = SetErrorAction | SetStatusAction