import { ApiExecDataStore } from './ApiExec';

export interface AppDataState {
    apiExec? : ApiExecDataStore,
    currentLanguage?: string
}