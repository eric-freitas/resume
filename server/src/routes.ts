import express           from 'express';
import { beforeAll, 
         afterAll,
         logRouter,
         handleError } from './routes/_utils';


import route_test       from './routes/teste';
import route_skills     from './routes/skills';

const router = express.Router();

router.use(beforeAll);
router.use(logRouter);

router.get('/', (req, res) => {
    return res.json({ msg: "Resume server" });
});

router.use('/test',     route_test );
router.use('/skills',   route_skills );

router.use(handleError);
router.use(afterAll);

export default router;