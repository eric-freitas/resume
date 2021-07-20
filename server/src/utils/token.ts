import { Response, 
    NextFunction } from 'express';
import jwt              from 'jsonwebtoken';

import config from '../utils/config';

export function createToken (auth: any) {
    return jwt.sign({
        id : auth.id
    }, config.secretToken,
    {
        expiresIn: 60 * 120
    });
};

export function generateToken(req: any, res: Response, next: NextFunction): any {
    req.token = createToken(req.auth);
    return next();
}

export function sendToken(req: any, res: Response): any {
    res.setHeader('x-auth-token', req.token);
    return res.status(200).send(JSON.stringify(req.user));
}