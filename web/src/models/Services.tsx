interface ServiceInit {
    status: 'init';
}
  
interface ServiceLoading {
    status: 'loading';
}
  
interface ServiceLoaded<T> {
    status: 'ok';
    payload: T;
}
  
interface ServiceError {
    status: 'error';
    error: any;
}

export type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;



export interface InvalidInputData {
    missing      : string[],
    invalidInput : {
        field      : string,
        expected   : string,
        identified : string
    }[],
    alreadyExists? : boolean 
}