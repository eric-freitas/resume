import express           from 'express';
import { beforeAll, 
         afterAll,
         logRouter,
         handleError } from './routes/_utils';


import route_test           from './routes/teste';
import route_skills         from './routes/skills';
import route_contact_info   from './routes/contactInfo';
import route_education      from './routes/education';
import route_experience     from './routes/experience';

const router = express.Router();

router.use(beforeAll);
router.use(logRouter);

router.get('/', (req, res) => {
    return res.json({ msg: "Resume server" });
});

router.use('/test'          , route_test          );
router.use('/skills'        , route_skills        );
router.use('/contact_info'  , route_contact_info  );
router.use('/education'     , route_education     );
router.use('/experience'    , route_experience    );

router.use(handleError);
router.use(afterAll);

export default router;