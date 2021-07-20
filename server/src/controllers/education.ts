
import { startLog }       from "../utils/logger";
import config from '../utils/config';
import { EducationItem } from "../models/education";

import Db from '../db/controllers/education';

const logger = startLog("education-controller");

class EducationController {

    db = new Db();

    async list(lang: string): Promise<EducationItem[]|null> {
        
        let result = await this.db.list(lang);
        if (!result || !result.length) {
            result = await this.db.list(config.defaultLanguage);
        }

        if (result && result.length) {
            return result;
        } else {
            return null;
        }
        
    };

}

export default EducationController;

