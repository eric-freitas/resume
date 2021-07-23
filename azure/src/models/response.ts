export enum ResponseType {
    Ok           = 1,
    GenericError = 2,
    NotFound     = 3,
    Unauthorized = 4,
    InvalidInput = 5
}

export interface CommonResponse {
    type : ResponseType,
    msg? : string | InvalidInputData | undefined
}

export interface InvalidInputData {
    missing      : string[],
    invalidInput : {
        field      : string,
        expected   : string,
        identified : string
    }[],
    alreadyExists? : boolean 
}