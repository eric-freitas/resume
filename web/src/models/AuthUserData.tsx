export interface UserData {
    email?    : string,
    name?     : string,
    token?    : string,
    nickname? : string,
    admin?    : boolean;
}

export interface UserDataStore {
    user     : UserData,
    loggedIn : boolean
}

