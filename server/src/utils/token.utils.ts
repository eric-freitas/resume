import { Response } from 'express';
import jwt from 'jsonwebtoken';

export function createToken (auth: any) {
    return jwt.sign({
            id : auth.id
        }, 'naquelas',
        {
            expiresIn: 60 * 120
        });
};

export function generateToken(req: any, res: Response, next: any) {
    req.token = createToken(req.auth);
    return next();
}

export function sendToken(req: any, res: Response) {
    res.setHeader('x-auth-token', req.token);
    return res.status(200).send(JSON.stringify(req.user));
};