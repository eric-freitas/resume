import { ApiExecDataStore } from './ApiExec';
import { UserDataStore } from './AuthUserData';

export interface AppDataState {
    currentUser? : UserDataStore,
    apiExec? : ApiExecDataStore
    currentLanguage?: string
}