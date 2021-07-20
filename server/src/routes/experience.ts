import express  from 'express';
import ExperienceController from '../controllers/experience';

import { exportError } from './_utils';

const router = express.Router();

router.get('/:lang', async(req, res, next) => {
    try {
        const experienceController = new ExperienceController();
        const result = await experienceController.list(req.params.lang);
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