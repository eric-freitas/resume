import { combineReducers } from 'redux'
import { AppDataState } from '../models/AppState'

import apiExec from './apiExec'

export interface AppReducerData {
    appStatus: AppDataState
}


const rootReducer = combineReducers<AppReducerData>({
    appStatus: apiExec
})

export default rootReducer