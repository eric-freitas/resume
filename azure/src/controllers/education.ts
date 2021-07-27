
import config from '../utils/config';
import { EducationItem } from "../models/education";

import Db from '../db/controllers/education';

/**
 * wraps education data retrieval methods
 *
 * @class EducationController
 */
class EducationController {

    db = new Db();

    /**
     * lists education data 
     *
     * @param {string} lang - language to filter
     * @return {*}  {(Promise<EducationItem[]|null>)} - list of education information
     * @memberof EducationController
     */
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

