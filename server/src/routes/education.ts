import express  from 'express';
import EducationController from '../controllers/education';

import { exportError } from './_utils';

const router = express.Router();

router.get('/:lang', async(req, res, next) => {
    try {
        const educationController = new EducationController();
        const result = await educationController.list(req.params.lang);
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