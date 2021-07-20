import { Request, Response, NextFunction } from 'express';

import { getRemoteAddress } from '../utils/express';
import { startLog     } from '../utils/logger';
import { getStopwatch, trimNulls } from '../utils/utils';
import { CommonResponse, ResponseType } from '../models/response';

const logger = startLog("webapi");

export function afterAll(req: Request, res: Response): void {
    if (res.locals.response || res.locals.render || res.locals.redirect || res.locals.status) {
        const status = res.locals.status || 200;
        let latency: string | string[] | undefined;
        if (res.locals.stopwatch) {
            latency = res.locals.stopwatch.stop();
        }

        logger.verbose("Replied request", { status, method: req.method, url: req.originalUrl, latency, response: res.locals.response });
        res.header("X-Response-Time", latency);
        if (res.locals.response) {
            //const jsonResult = trimNulls(res.locals.response);
            res.status(status).json(res.locals.response);
        } else if (res.locals.redirect) {
            res.redirect(res.locals.redirect);
        } else {
            res.status(res.locals.status).send();
        }
    } else {
        logger.warn("Route not supported", { path: req.path });
        res.status(404).send({ error: `Route '${req.path}' not supported` });
    }
}

export function beforeAll(req: Request, res: Response, next: NextFunction) : void {
    res.locals.stopwatch = getStopwatch();
    logger.runThread(() => next());
}

export function logRouter(req: Request, res: Response, next: NextFunction): void {
    const address = getRemoteAddress(req);
    logger.verbose("Received request", { method: req.method, url: req.originalUrl, address, cookies: req.cookies, body: req.body });
    next();
}


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
   

export function handleError (err: HttpException, req: Request, res: Response, next: NextFunction): void { 

    
    const joi = (err as any).joi || (err as any).details;
    if (joi) {
        logger.warn("joi validation error", joi);
        res.locals.response = { err: "invalid input", message: joi.message};
        res.locals.status = 400;
    } else {

        if (err instanceof SyntaxError && err.status >= 400 && err.status < 500 && err.message.indexOf("JSON")) {
            err.name = "ValidationError";
            const logMessage = req.url + " Body: " + (req as any).rawBody;
            logger.warn(logMessage);
        }

        if (err.name === "CorsError") {
            const origin = err.message;
            err.message = `Origin '${origin}' is not allowed by CORS. Client: '${getRemoteAddress(req)}'`;
        }

        const errorData = ERRORS[err.name] || ERRORS["Unknown"];


        const { status, loglevel, logStack } = errorData;
        logger[loglevel](logStack ? err.stack : `${err.name}: ${err.message}`); 
        let response = errorData.status === 500 ? { error: "Internal server error." } : { error: err.message };
        if (logStack && process.env.NODE_ENV !== "production") {
            (response as any).stack = err.stack
        }
        res.locals.response = response;
        res.locals.status = status;
    }
    next();
}

export function exportError(e: any): any {
    let err: any;
    if (e) {
        err = e.message || e.msg || e;
    } else {
        err = "unknown";
    }

    logger.error("error", e);

    return  { err };
}

export function commonResponseToHttpResponse(result: CommonResponse, res: Response) {
    switch (result.type) {
        case ResponseType.Ok:
            res.locals.status = 200;
            res.locals.response = { ok: true, msg: result.msg }
            break;
        case ResponseType.GenericError:
            res.locals.status = 500;
            res.locals.response = { err: result.msg };
            break;
        case ResponseType.NotFound:
            res.locals.status = 404;
            res.locals.response = { msg: result.msg };
            break;
        case ResponseType.Unauthorized:
            res.locals.status = 401;
            break;
        case ResponseType.InvalidInput:
            res.locals.status = 406;
            res.locals.response = { msg: result.msg };
    }
}

