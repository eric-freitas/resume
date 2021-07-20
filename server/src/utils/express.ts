import corsMiddleware   from "cors";
import { Request, 
         Response,
         RequestHandler,
         NextFunction } from 'express';

export const supportAsync = (fn:any) => (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export const getRemoteAddress = (req: Request) => req.headers["x-forwarded-for"] || req.connection.remoteAddress;

interface BrowserData {
    browser : string,
    os      : string,
    device  : string
}


class CorsError extends Error {
    constructor(message:any) {
        super(message);
        this.name = "CorsError";
    }
}

export const addRawBody = (req: Request, res: Response, buf: any): String => (req as any).rawBody = buf.toString();

export const cors = (allowedOrigins: string[]): RequestHandler => corsMiddleware(getCORSOptions(allowedOrigins));

const getCORSOptions = (allowedOrigins: string[])=> ({
    origin: (origin:any, callback:any) => {
        if (!origin || (allowedOrigins.indexOf(origin) !== -1)) {
            callback(null, true);
        } else {
            callback(new CorsError(origin));
        }
    }
});


 