import express  from 'express';

import { exportError } from './_utils';

const router = express.Router();

router.get('/:id', async(req, res, next) => {
    try {
        const result = {
            id: (parseInt(req.params.id) || 0)
        }
        if (result) {
            res.locals.response = result;
        } else {
            res.locals.status = 404;
        }
    } catch (e) {
        res.locals.status   = 500;
        res.locals.response = exportError(e);
    }

    return next();
});

    
    
export default router;