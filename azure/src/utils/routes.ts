import { CommonResponse, ResponseType } from '../models/response';


const ERRORS = {
    ValidationError:         { status: 400, loglevel: "warn",    logStack: false }, // Bad Request
    PermissionError:         { status: 403, loglevel: "warn",    logStack: false }, // Forbidden
    AuthenticationError:     { status: 401, loglevel: "verbose", logStack: false }, // Unauthorized
    InvalidCredentialsError: { status: 401, loglevel: "warn",    logStack: false }, // Unauthorized
    InvalidTokenError:       { status: 401, loglevel: "warn",    logStack: false }, // Unauthorized
    SessionExpiredError:     { status: 401, loglevel: "verbose", logStack: false }, // Unauthorized
    NotSignedUpError:        { status: 401, loglevel: "warn",    logStack: false }, // Unauthorized
    NotFoundError:           { status: 404, loglevel: "warn",    logStack: false }, // Not Found
    SessionNotFoundError:    { status: 404, loglevel: "warn",    logStack: false }, // Not Found
    AlreadyExistsError:      { status: 409, loglevel: "warn",    logStack: false }, // Conflict
    CorsError:               { status: 204, loglevel: "warn",    logStack: false }, // No content
    DatabaseError:           { status: 500, loglevel: "error",   logStack: false }, // Internal Server Error
    InfrastructureError:     { status: 502, loglevel: "error",   logStack: false }, // Bad Gateway
    Unknown:                 { status: 500, loglevel: "error",   logStack: true }   // Internal Server Error
}

class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
}
   


export function exportError(e: any): any {
    let err: any;
    if (e) {
        err = e.message || e.msg || e;
    } else {
        err = "unknown";
    }

    return  { err };
}
